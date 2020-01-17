$(document).ready(function() {

    // Language selection   
    hunLangValues();

    $(".lang").click(function() {
        var lang = $(this).data("lang") === "Magyar" ? "hu" : "en";

        switch (lang) {

            case "hu":
                hunLangValues();
                break;

            case "en":
                enLangValues();
                break;
        }
    });

    function hunLangValues() {
        $("span#warn").html('A <span class="asterisk w3-margin-bottom">*-al</span> jelölt mezők kitöltése kötelező!');
        $("div#alert").html("Kérem, adja meg a hiányzó adatokat!");
        $("span#type").html('Kérem, adja meg a jelszó típusát!<span class="asterisk">*</span>');
        $("span#alph").text("Betűk");
        $("span#num").text("Számok");
        $("span#mix").text("Számok & Betűk");
        $("span#passWarn").html('Kérem, adja meg a jelszó hosszát (karakterek száma)!<span class="asterisk">*</span>');
        $("span#gen").text("Jelszó készítése");
        $("span#pass").text("Jelszó:");
        $("span#copy").text("Jelszó másolása");
    }

    function enLangValues() {
        $("span#warn").html('The fields marked with <span class="asterisk w3-margin-bottom">*</span> are obligatory!');
        $("div#alert").html("Please, provide the missing data!");
        $("span#type").html('Please, select a type!<span class="asterisk">*</span>');
        $("span#alph").text("Alphabetical");
        $("span#num").text("Numerical");
        $("span#mix").text("Mixed (Alphabetical & Numerical)");
        $("span#passWarn").html('Please, provide the length of the password! (characters)<span class="asterisk">*</span>');
        $("span#gen").text("Create");
        $("span#pass").text("Password:");
        $("span#copy").text("Copy to clipboard");
    }

    // Height of content div
    $("div#wrapper").css("height", $(window).height() + "px");

    // Generation of password/token
    $("button#generate").click(function() {
        var type = $("input[name='type']:checked").val();
        var length = $("input#length").val();

        if (type !== "" && length !== "") {
            $("div#alert").addClass("w3-hide");

            $.ajax({
                url: "token.php",
                type: "POST",
                data: { type: type, length: length },
                dataType: "html",
                success: function(response) {
                    $("textarea#pass").val(response);
                }
            });
        } else {
            $("textarea#pass").val("");
            $("div#alert").removeClass("w3-hide");
        }
    });

    // Copy to clipboard
    $("button#copy").click(function() {
        $("textarea#pass").select();
        document.execCommand("copy");
    });
});