
$(document).ready(function() {
    // Lidar com o botão "Trocar Conteúdo"
    $("#home").click(function() {
        $.ajax({
            url:    "./AJAX/home.html", // URL do novo conteúdo
            method: "GET",
            success: function(data) {
                $("#main").html(data); // Substituir o conteúdo existente pelo novo conteúdo
            },
            error: function() {
                alert("Erro ao carregar o novo conteúdo.");
            }
        });
    });
});
$(document).ready(function() {
    // Lidar com o botão "Trocar Conteúdo"
    $("#about").click(function() {
        $.ajax({
            url:    "./AJAX/about.html", // URL do novo conteúdo
            method: "GET",
            success: function(data) {
                $("#main").html(data); // Substituir o conteúdo existente pelo novo conteúdo
            },
            error: function() {
                alert("Erro ao carregar o novo conteúdo.");
            }
        });
    });
});
$(document).ready(function() {
    // Lidar com o botão "Trocar Conteúdo"
    $("#education").click(function() {
        $.ajax({
            url:    "./AJAX/education.html", // URL do novo conteúdo
            method: "GET",
            success: function(data) {
                $("#main").html(data); // Substituir o conteúdo existente pelo novo conteúdo
            },
            error: function() {
                alert("Erro ao carregar o novo conteúdo.");
            }
        });
    });
});
$(document).ready(function() {
    // Lidar com o botão "Trocar Conteúdo"
    $("#skills").click(function() {
        $.ajax({
            url:    "./AJAX/skills.html", // URL do novo conteúdo
            method: "GET",
            success: function(data) {
                $("#main").html(data); // Substituir o conteúdo existente pelo novo conteúdo
            },
            error: function() {
                alert("Erro ao carregar o novo conteúdo.");
            }
        });
    });
});

