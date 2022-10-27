// Form Report
const btnReport = document.querySelectorAll(".report_btn");

btnReport.forEach(function (btn_report) {
  btn_report.onclick = function () {
    const reportContains = btn_report.getAttribute("data-report");

    document.getElementById(reportContains).style.display = "block";
  };
});

const closeBtnReport = document.querySelectorAll(".closeReport_content");
closeBtnReport.forEach(function(btn_report) {
  btn_report.onclick = function () {
    const reportContains = btn_report.closest(".bg-reportWrapper").style.display = "none";
  }
})
