
$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 4000
    });
    $('#contactModal').on('show.bs.modal', function (e) {
        console.log("el modal està abriendo.");
        $('.contact-btn').removeClass('btn-outline-warning');
        $('.contact-btn').addClass('btn-primary');
        $('.contact-btn').prop('disabled', true);
    });
    $('#contactModal').on('shown.bs.modal', function (e) {
        console.log("S terminò de abrir el modal.");
    });
    $('#contactModal').on('hide.bs.modal', function (e) {
        console.log("el modal se està ocultando.");
    });
    $('#contactModal').on('hidden.bs.modal', function (e) {
        console.log("El modal terminò de ocultarse.");
        $('.contact-btn').addClass('btn-outline-warning');
        $('.contact-btn').removeClass('btn-primary');
        $('.contact-btn').prop('disabled', false);
    });
});