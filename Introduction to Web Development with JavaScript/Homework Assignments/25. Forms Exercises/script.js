function checkform() {
    if (document.survey.testName.value == '') {
        alert('There is a problem with the name field');
        return false;

    } else if (document.survey.testDate.value == '') {
        alert('There is a problem with Test Date field');
        return false;

        // } else if () {
        //   alert('There is a problem with Rocket Type field');
        //   return false;

        // } else if () {
        //   alert('There is a problem with Booster Count field');
        //   return false;

    } else if (!document.survey.radioBtn[0].checked &&
        !document.survey.radioBtn[1].checked &&
        !document.survey.radioBtn[2].checked) {
        alert('There is a problem with Wind Rating field');
        return false;

    }
    return true;
}

let submit = document.getElementById("runSimulation");
submit.addEventListener("click", checkform);