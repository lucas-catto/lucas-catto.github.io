
$(document).ready(function() {
    // Lidar com o botão "Trocar Conteúdo"
    $("#home").click(function() {
        $.ajax({
            url:    "./AJAX/Home/home.html", // URL do novo conteúdo
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
            url:    "./AJAX/About/about.html", // URL do novo conteúdo
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
            url:    "./AJAX/Education/education.html", // URL do novo conteúdo
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
            url:    "./AJAX/Skills/skills.html", // URL do novo conteúdo
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

