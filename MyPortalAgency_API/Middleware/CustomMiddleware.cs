﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Middleware
{
    public class MyAuthorize
    {
        private readonly RequestDelegate _next;
        public MyAuthorize(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            // authorize request source here.
            string authHeader = context.Request.Headers["Authorization"];

            if (authHeader != null)
            {
                int startPoint = authHeader.IndexOf(".") + 1;
                int endPoint = authHeader.LastIndexOf(".");

                var tokenString = authHeader.Substring(startPoint, endPoint - startPoint).Split(".");
                var token = tokenString[0].ToString() + "==";

                var credentialString = Encoding.UTF8
                    .GetString(Convert.FromBase64String(token));

                // Splitting the data from Jwt
                var credentials = credentialString.Split(new char[] { ':', ',' });

                // Trim this string.
                var userRule = credentials[5].Replace("\"", "");
                var userName = credentials[3].Replace("\"", "");

                // Identity Principal
                var claims = new[]
                {
                    new Claim("name", userName),
                    new Claim(ClaimTypes.Role, userRule),
                };
                var identity = new ClaimsIdentity(claims, "basic");
                context.User = new ClaimsPrincipal(identity);
            }
            await _next(context);
        }
    }

    public static class CustomMiddleware
    {
        public static IApplicationBuilder UseMyAuthorize(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<MyAuthorize>();
        }
    }
}
