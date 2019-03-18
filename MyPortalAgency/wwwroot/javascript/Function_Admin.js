function calladmin(url, type, parameters, Models) {
    var callobj = {
    }
    var urlstring = "?";
    Object.entries(parameters).forEach((item, index, arr) => {
        urlstring += item[0] + "=" + item[1] + "&";
        if (!arr[index + 1]) {
            urlstring = urlstring.substring(0, urlstring.length - 1);
        }
    });
    $.ajax({
        type: type,
        url: url + urlstring,
        contentType: "application/json",
        dataType: "json",
        beforeSend: function () {
            // this is where we append a loading image
            //  $('#ajax-panel').html('<div class="loading"><img src="/images/loading.gif" alt="Loading..." /></div>');
        },
        success: function (data) {
            // successful request; do something with the data
            var result = Object.assign(callobj, data);
            result.StatusCode = 200;
            callobj = result;
            Object.entries(Models).forEach((item, index, arr) => {
                var WelovetoHelp = callobj.pageContentViewModel.filter(x => x.type === item[1].Type);
                document.getElementById(item[1].ID_Div).innerHTML = window[item[1].Function](WelovetoHelp);
            });
            $("#Id").val(callobj.id);
            $("#Title").val( callobj.title);
            $("#Description").val(callobj.description) ;


        },
        error: function (xhr, ajaxOptions, thrownError) {
            // failed request; give feedback to user
            // $('#ajax-panel').html('<p class="error"><strong>Oops!</strong> Try that again in a few moments.</p>');
            var result = Object.assign(callobj, xhr.responseJSON);
            result.StatusCode = 400;
            callobj = result;
        }

    });

}

function renderAdmin_OurStory(Obj) {
    var htmlstring = ``;
 
        Obj.forEach(function (element) {
            htmlstring += `<div class="col-lg-12 col-xl-6">
        <section class="card card-horizontal mb-4">
            <header class="card-header bg-primary">
                <div class="">`
            if (element.logo.startsWith('data')) {
                htmlstring += `<img src="${element.logo}" class="rounded-circle" style="height: 180px;width: 220px;">`;

            } else {
                htmlstring += `<i class="${element.logo}"></i>`;

            }

            htmlstring += `  </div>
            </header>
            <div class="card-body p-4">
                <h3 class="font-weight-semibold mt-3">${element.title}</h3>
                <p>${element.description}</p>
<hr>
              <div class="summary-footer  text-right " style="">
                      <a href="${urledit}&&id=${element.id}" type="button" class="mb-1 mt-1 mr-1 btn btn-warning"><i class="fa fa-edit"></i></a> 
                      <a href="${urldelete}&&id=${element.id}"  type="button" class="mb-1 mt-1 mr-1 btn btn-danger"><i class="fa fa-trash"></i></a> 
                </div>
            </div>
        </section>
    </div>`;
        });
    
 

    return htmlstring;
}
