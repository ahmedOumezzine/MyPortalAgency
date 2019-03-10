
function call(url, type, parameters, Models) {
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

class Model {
    constructor(ID_Div, Type, Function) {
        this.ID_Div = ID_Div;
        this.Type = Type;
        this.Function = Function;
    }
}
const Models = [];



// contact us 


function render_WelovetoHelp(Obj) {
    var htmlstring = `
            <h4 class="heading-primary mt-lg">We love to <strong>Help!</strong></h4>
            <p>${Obj[0].description}</p>`;
    return htmlstring;
}
function render_BusinessHours(Obj) {
    var htmlstring = `
            <h4 class="heading-primary">Business <strong>Hours</strong></h4>
            <ul class="list list-icons list-dark mt-xlg">`;
    Obj.forEach(function (element) {
        htmlstring += `<li><i class="${element.logo}"></i> <strong>${element.title}  </strong> - ${element.description}</li>`;
    });
    htmlstring += ` </ul>  `;
    return htmlstring;
}
function render_OurOffice(Obj) {
    var htmlstring = `
            <h4 class="heading-primary">The <strong>Office</strong></h4>
            <ul class="list list-icons list-icons-style-3 mt-xlg">`;
    Obj.forEach(function (element) {
        htmlstring += ` <li><i class="${element.logo}"></i> <strong> ${element.title} : </strong>  ${element.description}</li>`;
    });
    htmlstring += ` </ul>  `;
    return htmlstring;
}



// About US

function render_AboutUs(Obj) {
    var htmlstring = `<div class="col-sm-12">
        <h3>${Obj[0].title}</h3>
        <p>${Obj[0].description}</p>   
    </div>`;
    return htmlstring;
}

function render_PillarsofOurSuccess(Obj) {
    var htmlstring = `
          <h2>Pillars of <strong>Our Success</strong></h2>
  <div class="row pt-lg">
        <div class="row">
                `;
    Obj.forEach(function (element) {
        htmlstring += `  <div class="feature-box col-sm-6">
            <div class="feature-box-icon">
                <i class="${element.logo}"></i>
            </div>
            <div class="feature-box-info">
                <h4 class="heading-primary mb-none">${element.title} </h4>
                <p class="tall">${element.description}</p>
            </div>
        </div> `;
    });
    htmlstring += `  
        </div>
    </div> `;
    return htmlstring;
}

function render_OurStory(Obj) {
    var htmlstring = `
 <div class="col-md-12">
            <h2>Our <strong>Story</strong></h2>
        </div>
        <div class="col-md-12">
            <ul class="history" style=" margin: 0 0 25px; padding: 0; list-style: none; ">`;
    Obj.forEach(function (element) {
        htmlstring += ` <li class="appear-animation animated fadeInUp appear-animation-visible" data-appear-animation="fadeInUp">
                <div class="featured-box">
                    <div class="box-content">
                <img class="" src="${element.logo}" alt="">

                        <h4 class="heading-primary"><strong>${element.title}</strong></h4>
                        <p style="    text-align: justify;"> ${element.description} </p>
                    </div>
                </div>
                </li>
     `;
        });
    htmlstring += ` </ul>     </div > `;
    return htmlstring;
}


// services

function render_OurServices(Obj) {
    var htmlstring = ``;
    Obj.forEach(function (element, index) {
        console.log(index);
        var css = (index % 2 == 0) ? "section pb-none mb-none " :"section section-tertiary pb-none mb-none";
        var pullright = (index % 2 == 0) ? "col-md-7" :" pull-right col-md-7";
        var pullleft = (index % 2 == 0) ? "pull-right col-md-4" :" pull-left col-md-4";
        htmlstring += `<section class="${css}" style=" margin: 0 0; ">
    <div class="container">
        <div class="row">
            <div class="${pullright}">
                <h2 style="color:black">${element.title}</h2>
                <p style="color:black">${element.description} </p>
            </div>
            <div class=" ${pullleft}" style="margin-bottom:75px">
                <img class="img-responsive appear-animation animated fadeInUp appear-animation-visible" src="${element.logo}" alt="" data-appear-animation="fadeInUp" style=" height: 270px; ">
            </div>
        </div>
    </div>
</section>`;
    });
    return htmlstring;
}

// OurPortfolios


function render_OurPortfolios(Obj) {
    var htmlstring = ``;
         htmlstring += `<div class="container py-2">

            <ul class="nav nav-pills sort-source sort-source-style-3 justify-content-center" data-sort-id="portfolio" data-option-key="filter" data-plugin-options="{'layoutMode': 'fitRows', 'filter': '*'}">
<li data-option-value="*" class="nav-item active"><a class="nav-link text-1 text-uppercase" href="#">Show All</a></li>`;
        Obj.forEach(function (element) {
            htmlstring += ` <li class="nav-item" data-option-value=".${element.description}" > 
                                <a class="nav-link text-1 text-uppercase" href="#">${element.description}</a>
                            </li>`;
        });
        htmlstring += `</ul>`;
    htmlstring += `<div class="">`;
        htmlstring += `<div class="row portfolio-list sort-destination" data-sort-id="portfolio">`;

            Obj.forEach(function (element) {
                htmlstring += `
            <div class="colmd-6 col-lg-1-5 isotope-item ${element.description}" >
                <div class="portfolio-item">
                    <a href="portfolio-single-wide-slider.html">
                        <span class="thumb-info thumb-info-lighten border-radius-0">
                            <span class="thumb-info-wrapper border-radius-0">
                                <img src="${element.logo}" class="img-fluid border-radius-0" alt="">

                                    <span class="thumb-info-title">
                                        <span class="thumb-info-inner text-1 line-height-1 pt-1">${element.title}</span>
                                        <span class="thumb-info-type">${element.description}</span>
                                    </span>
                                    <span class="thumb-info-action">
                                        <span class="thumb-info-action-icon bg-dark opacity-8"><i class="fas fa-plus"></i></span>
                                    </span>
                                    </span>
                            </span>
                            </a>
                        </div>
                </div>`;
        });
         
    htmlstring += `</div></div></div>`;

    return htmlstring;
}
