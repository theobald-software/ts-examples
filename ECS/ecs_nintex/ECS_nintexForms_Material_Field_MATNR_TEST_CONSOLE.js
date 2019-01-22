// do not copy comments, because the nintex forms corrupt new lines and the logic code gets commented out.

NWF$(document).ready(function() {
    theobald.ready(function() {
        var connection = {
            ecs: {
                serviceApplication: "ec5"
            }
        };

        tEcs.executeXql({
            connection: connection,
            data: "SELECT TOP 2 MATNR, MAKTX FROM MAKT"
        }).done(function(data) {
            console.log('Call succeded:', data);
        }).fail(function(data, data2) {
            console.log('Communication error:', data, data2);
        });
    });
});
