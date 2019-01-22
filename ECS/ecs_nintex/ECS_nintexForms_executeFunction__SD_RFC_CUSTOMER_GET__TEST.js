// do not copy comments, because the nintex forms corrupt new lines and the logic code gets commented out.

NWF$(document).ready(function () {
  theobald.ready(function () {
    var connection = {
      ecs: {
        serviceApplication: "ec5"
      }
    };

    tEcs.executeFunction({
      connection: connection,
      data: {
        exports: {
          NAME1: "T*"
        }
      },
      name: "sd_rfc_customer_get",
      done: function (data) {
        console.log('Success:');
        console.log(data);
      }
    });
  });
});