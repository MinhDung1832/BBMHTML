function fomart_split(input, number) {
    try {
        var value = input;
        if (value != null && !value.length < 1) {
            return value.split(" - ")[number];
        } else {
            return "";
        }
    } catch (e) {

    }
}

jQuery(document).ready(function ($) {
    $(".OrderValue").on('keyup', function () {
        var n = parseInt($(this).val().replace(/\D/g, ''), 10);
        $(this).val(n.toLocaleString().replaceAll(".", ",").replaceAll("NaN", ""));
    });

    $(".OrderValue").load('keyup', function () {
        var n = parseInt($(this).val().replace(/\D/g, ''), 10);
        if (n.toLocaleString() != 'NaN') {
            $(this).val(n.toLocaleString().replaceAll(".", ",").replaceAll("NaN", ""));
        }
    });
});
$('body').on('keyup', '.OrderValue', function (e) {
    var n = parseInt($(this).val().replace(/\D/g, ''), 10);
    if (n.toLocaleString() != 'NaN') {
        $(this).val(n.toLocaleString().replaceAll(".", ",").replaceAll("NaN", ""));
    }
});
function js_checkip() {
    if ($('#IsChekIPV4').val() == "") {
        $.getJSON("https://api.ipify.org?format=json", function (data) {
            $('#IsChekIPV4').val(data.ip)
        })
    }
    if ($('#IsChekIPV4').val() == "") {
        $.get("https://ipinfo.io/ip", function (data) {
            $('#IsChekIPV4').val(data)
        })
    }
    if ($('#IsChekIPV4').val() == "") {
        $.get("https://api.ipify.org", function (data) {
            $('#IsChekIPV4').val(data)
        })
    }
    if ($('#IsChekIPV4').val() == "") {
        $.get("https://icanhazip.com", function (data) {
            $('#IsChekIPV4').val(data)
        })
    }
    if ($('#IsChekIPV4').val() == "") {
        $.get("https://wtfismyip.com/text", function (data) {
            $('#IsChekIPV4').val(data)
        })
    }
}