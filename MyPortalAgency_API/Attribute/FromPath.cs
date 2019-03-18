using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortalAgency_API.Attribute
{
    public static class StringExtensions
    {
        public static Dictionary<string, string> ToDictionaryFromUriPath(this string path)
        {
            var parts = path.Split('/');
            var dictionary = new Dictionary<string, string>();
            for (var i = 0; i < parts.Length; i++)
            {
                if (i % 2 != 0) continue;
                var key = parts[i].ToLower(); // case insensitive model binding
                var value = parts[i + 1];
                dictionary.Add(key, value);
            }

            return dictionary;
        }
    }

    [AttributeUsage(AttributeTargets.Parameter | AttributeTargets.Property,
  AllowMultiple = false, Inherited = true)]
    public class FromPath :System.Attribute, IBindingSourceMetadata, IModelNameProvider
    {
        /// <inheritdoc />
        public BindingSource BindingSource => BindingSource.Custom;

        /// <inheritdoc />
        public string Name { get; set; }
    }

    public class PathValueProviderFactory : IValueProviderFactory
    {
        public Task CreateValueProviderAsync(ValueProviderFactoryContext context)
        {
            var provider = new PathValueProvider(
                BindingSource.Custom,
                context.ActionContext.RouteData.Values);

            context.ValueProviders.Add(provider);

            return Task.CompletedTask;
        }
    }

    public class PathValueProvider : IValueProvider
    {
        public Dictionary<string, string> _values { get; }

        public PathValueProvider(BindingSource bindingSource, RouteValueDictionary values)
        {
            if (!values.TryGetValue("path", out var path))
            {
                var msg = "Route value 'path' was not present in the route.";
                throw new InvalidOperationException(msg);
            }

            _values = (path as string).ToDictionaryFromUriPath();
        }

        public bool ContainsPrefix(string prefix) => _values.ContainsKey(prefix);

        public ValueProviderResult GetValue(string key)
        {
            key = key.ToLower(); // case insensitive model binding
            if (!_values.TryGetValue(key, out var value))
            {
                return ValueProviderResult.None;
            }

            return new ValueProviderResult(value);
        }
    }
}
