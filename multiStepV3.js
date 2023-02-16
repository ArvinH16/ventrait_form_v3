var type, company_size, company_weOrYou, personal_weOrYou, lighting, indoor_outdoor, shot, backdrop, email, summary;


var we_tabs_next_button = '[bloc=next-question]';
var we_tabs_prev_button = '[bloc=prev-question]';
var we_tabs_active_class = 'active';

var we_activeTab, we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

var tabList = ['type'];

openTab(tabList[0]);

$(we_tabs_next_button).on("click", function () {
    var activeTab = $(".w--tab-active").attr("data-w-tab");
    var indexOfActiveTab = tabList.indexOf(activeTab);
    var indexOfNextTab = indexOfActiveTab + 1;
    var nextTab = tabList[indexOfNextTab];
    var amountOfTabs = tabList.length;
    var attrNextTab = $('.w--tab-active').attr('next-tab');

    openTab(attrNextTab);

    attrNextTab = $('.w--tab-active').attr('next-tab');

    if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
    } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
    }

    if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
    }
});

$(we_tabs_prev_button).on("click", function () {
    var activeTab = $(".w--tab-active").attr("data-w-tab");
    var indexOfActiveTab = tabList.indexOf(activeTab);
    var indexOfPrevTab = indexOfActiveTab - 1;
    var prevTab = tabList[indexOfPrevTab];

    var attrPrevTab = $('.w--tab-active').attr('prev-tab');

    if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
    }

    if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
    } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
    }
});

function openTab(tab) {
    var tab_link = "a[data-w-tab=" + tab;
    tab = "div[data-w-tab=" + tab;

    $(tab).siblings().removeClass("w--tab-active");
    $(tab).addClass("w--tab-active");
    $(tab_link).siblings("a").removeClass("w--current");
    $(tab_link).addClass("w--current");
} $("[name=type]").on("input", function () {
    type = getValueFromInput("type");
    if (type == 1) {

        nextTab = 'personal_weOrYou';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
            tabList[we_indexOfNextTab] = nextTab;
        } else {
            tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab', nextTab);
        $($('[data-w-tab=personal_weOrYou]')).attr('prev-tab', we_activeTab);

    } else if (type == 2) {

        nextTab = 'company_size';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
            tabList[we_indexOfNextTab] = nextTab;
        } else {
            tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab', nextTab);
        $($('[data-w-tab=company_size]')).attr('prev-tab', we_activeTab);

    }
});

$("[name=type]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    type = getValueFromInput("type");
    if (type == 1) {

        nextTab = 'personal_weOrYou';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
            tabList[we_indexOfNextTab] = nextTab;
        } else {
            tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab', nextTab);
        $($('[data-w-tab=personal_weOrYou]')).attr('prev-tab', we_activeTab);

    } else if (type == 2) {

        nextTab = 'company_size';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
            tabList[we_indexOfNextTab] = nextTab;
        } else {
            tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab', nextTab);
        $($('[data-w-tab=company_size]')).attr('prev-tab', we_activeTab);

    }
});
$("[name=company_size]").on("input", function () {
    company_size = getValueFromInput("company_size");

    nextTab = 'company_weOrYou';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=company_weOrYou]')).attr('prev-tab', we_activeTab);

});

$("[name=company_size]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    company_size = getValueFromInput("company_size");

    nextTab = 'company_weOrYou';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=company_weOrYou]')).attr('prev-tab', we_activeTab);

});
$("[name=company_weOrYou]").on("input", function () {
    company_weOrYou = getValueFromInput("company_weOrYou");

    nextTab = 'lighting';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=lighting]')).attr('prev-tab', we_activeTab);

});

$("[name=company_weOrYou]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    company_weOrYou = getValueFromInput("company_weOrYou");

    nextTab = 'lighting';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=lighting]')).attr('prev-tab', we_activeTab);

});
$("[name=personal_weOrYou]").on("input", function () {
    personal_weOrYou = getValueFromInput("personal_weOrYou");

    nextTab = 'indoor_outdoor';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=indoor_outdoor]')).attr('prev-tab', we_activeTab);

});

$("[name=personal_weOrYou]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    personal_weOrYou = getValueFromInput("personal_weOrYou");

    nextTab = 'indoor_outdoor';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=indoor_outdoor]')).attr('prev-tab', we_activeTab);

});
$("[name=indoor_outdoor]").on("input", function () {
    indoor_outdoor = getValueFromInput("indoor_outdoor");

    nextTab = 'lighting';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=lighting]')).attr('prev-tab', we_activeTab);

});

$("[name=indoor_outdoor]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    indoor_outdoor = getValueFromInput("indoor_outdoor");

    nextTab = 'lighting';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=lighting]')).attr('prev-tab', we_activeTab);

});
$("[name=lighting]").on("input", function () {
    lighting = getValueFromInput("lighting");

    nextTab = 'shot';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=shot]')).attr('prev-tab', we_activeTab);

});

$("[name=lighting]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    lighting = getValueFromInput("lighting");

    nextTab = 'shot';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=shot]')).attr('prev-tab', we_activeTab);

});
$("[name=shot]").on("input", function () {
    shot = getValueFromInput("shot");

    nextTab = 'backdrop';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=backdrop]')).attr('prev-tab', we_activeTab);

});

$("[name=shot]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    shot = getValueFromInput("shot");

    nextTab = 'backdrop';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=backdrop]')).attr('prev-tab', we_activeTab);

});
$("[name=backdrop]").on("input", function () {
    backdrop = getValueFromInput("backdrop");

    nextTab = 'email';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=email]')).attr('prev-tab', we_activeTab);

});

$("[name=backdrop]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    backdrop = getValueFromInput("backdrop");

    nextTab = 'email';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=email]')).attr('prev-tab', we_activeTab);

});
$("[name=email]").on("input", function () {
    email = getValueFromInput("email");

    nextTab = 'summary';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=summary]')).attr('prev-tab', we_activeTab);

});

$("[name=email]").parent("label.w-radio").on("click", function () {
    clickedRadioButtonValue = $("input", this).val();
    email = getValueFromInput("email");

    nextTab = 'summary';
    we_activeTab = $(".w--tab-active").attr("data-w-tab");
    we_indexOfActiveTab = tabList.indexOf(we_activeTab);
    we_indexOfNextTab = we_indexOfActiveTab + 1;
    we_indexOfPrevTab = we_indexOfActiveTab - 1;
    we_prevTab = tabList[we_indexOfPrevTab];
    we_amountOfTabs = tabList.length;

    if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
    } else {
        tabList.push(nextTab);
    }
    $(we_tabs_next_button).addClass(we_tabs_active_class);
    $(".w--tab-active").attr('next-tab', nextTab);
    $($('[data-w-tab=summary]')).attr('prev-tab', we_activeTab);

});
$('[bloc=next-question]').on('click', function () {
    if ($('.w--tab-active').attr('data-w-tab') == 'summary') {
        $('[bloc=meeting-summary]').css({
            'display': 'none',
        });

    }
});
