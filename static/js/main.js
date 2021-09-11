$(document).ready(function () {
    $('.datatable').DataTable();

    // \\\\\\accodian\\\\\\\\\\\\\\\

    $('.card-header').click(function () {
        $(this).find('i').toggleClass('icofont-plus-square icofont-minus')
    });

    let suporlochtml = document.querySelector('[name="suporlochtml"]');

    function showDiv() {
        document.getElementsByClassName('custommer')[0].classList.remove('show');
        document.getElementsByClassName(suporlochtml.value + 'court')[0].classList.add('show');
    }

    suporlochtml.addEventListener('change', showDiv, false);

});

$(document).ready(function () {
    var rowIdx = 0;
    $('.addrow').on('click', function () {

        $('.product_list').append(`<tr id="R${++rowIdx}">
          <td>1</td>
          <td>bag</td>
          <td><input type='number' class='form-control' minlength='0.01'></td>
          <td><input type='number' class='form-control' minlength='0.01'></td>
          <td><input type='number' class='form-control' minlength='0.01'></td>
          <td class="text-center">
          <i class="icofont-close-squared-alt remove text-danger"></i>
          </td>
            </tr>`);
    });

    $('.product_list').on('click', '.remove', function () {
        var child = $(this).closest('tr').nextAll();
        child.each(function () {
            var id = $(this).attr('id');
            var idx = $(this).children('.row-index').children('p');
            var dig = parseInt(id.substring(1));
            idx.html(`Row ${dig - 1}`);
            $(this).attr('id', `R${dig - 1}`);
        });
        $(this).closest('tr').remove();
        rowIdx--;
    });
});




var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById("pieChart");

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['a', 'b', 'c'],
        datasets: [{
            label: '# of Followers',
            data: [1, 4, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
        responsive: false
    }
});
