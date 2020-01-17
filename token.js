$(document).ready(function() {

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