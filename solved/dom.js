const $ = function (sel) {
  const nodeList = document.querySelectorAll(sel);

  const text = function (content) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].textContent = content;
    }
  }

  const toggleClass = function (className) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(className);
    }
  }

  const addClass = function (className) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(className);
    }
  }

  const removeClass = function (className) {
    for (let i = 0; i < nodeList.lenght; i++) {
      nodeList[i].classList.remove(className);
    }
  }

  const publicAPI = {
    text: text,
    toggleClass: toggleClass,
    on: on
  }

  return publicAPI;

}

/* test */

const cleanPage = function () {
  $('#verifyDiv').addNewClass('nonVisible');
  $('#lookupDiv').addNewClass('nonVisible');
  $('#containsDiv').addNewClass('nonVisible');
  $('#updateDiv').addNewClass('nonVisible');
  $('#addDiv').addNewClass('nonVisible');
  $('#deleteDiv').addNewClass('nonVisible');
  $('#arrangeDiv').addNewClass('nonVisible');
}

const cleanContent = function () {
  $('#content').empty();
  $('#content').addNewClass('centerContent');
}

cleanPage();
cleanContent();

let commandSelected = document.querySelectorAll('aside section div');

commandSelected.forEach(element => {
  element.style.cursor = "pointer";

  element.addEventListener('click', function () {
    cleanPage();
    cleanContent();
    event.preventDefault();

    let cmd = element.getAttribute('id');

    if (cmd === 'print') {
      $('#content').toggleClass('centerContent');
      $('#content').printAll(employeeList);
    }
    else if (cmd === 'verify')
      $('#verifyDiv').toggleClass('nonVisible');
    else if (cmd === 'lookup')
      $('#lookupDiv').toggleClass('nonVisible');
    else if (cmd === 'contains')
      $('#containsDiv').toggleClass('nonVisible');
    else if (cmd === 'update')
      $('#updateDiv').toggleClass('nonVisible');
    else if (cmd === 'add')
      $('#addDiv').toggleClass('nonVisible');
    else if (cmd === 'delete')
      $('#deleteDiv').toggleClass('nonVisible');
    else if (cmd === 'arrange')
      $('#arrangeDiv').toggleClass('nonVisible');
  });
});

$('#verifySubmit').on('click', function () {
  cleanContent();
  event.preventDefault();

  const inputName = $('#verifyInput').val();
  let checkEmployee = 'Employee Not Found';

  if (employeeList.some(e => (inputName.toUpperCase() === (e.name).toUpperCase())))
    checkEmployee = 'Employee Found';

  $('#content').render(checkEmployee);
});

$('#lookupSubmit').on('click', function () {
  cleanContent();
  event.preventDefault();

  const inputName = $('#lookupInput').val();
  const eList = employeeList.filter(e => inputName.toUpperCase() === e.name.toUpperCase());
  (eList.length > 0) ? $('#content').printAll(eList) : $('#content').render('Employee Not Found');

});

$('#containsSubmit').on('click', function () {
  cleanContent();
  event.preventDefault();

  const str = $('#containsInput').val();
  const eList = employeeList.filter(e => e.name.toUpperCase().includes(str.toUpperCase()));
  (eList.length > 0) ? $('#content').printAll(eList) : $('#content').render('Employee Not Found');

});

$('#updateSubmit').on('click', function () {
  cleanContent();
  event.preventDefault();

  const inputName = $('#updateNameInput').val();
  const inputNum = $('#updateNumInput').val();
  const inputPhone = $('#updatePhoneInput').val();

  const eList = employeeList.filter(e => (((inputName.toUpperCase() === e.name.toUpperCase()) && (inputNum == e.officeNum)) ||
    ((inputName.toUpperCase() === e.name.toUpperCase()) && (inputPhone == e.phoneNum)) ||
    ((inputPhone == e.phoneNum) && (inputNum == e.officeNum))));
  if (eList.length > 0) {
    eList[0].name = inputName;
    eList[0].phoneNum = inputPhone;
    eList[0].officeNum = inputNum;
    $('#content').printAll(eList);
  } else
    $('#content').render('Employee Not Found');

});

$('#addSubmit').on('click', function () {
  cleanContent();
  event.preventDefault();
  const inputName = $('#addNameInput').val();
  const inputNum = $('#addNumInput').val();
  const inputPhone = $('#addPhoneInput').val();

  const employee = {
    name: inputName,
    phoneNum: inputPhone,
    officeNum: inputNum
  };
  const eList = employeeList.filter(e => ((inputName.toUpperCase() === e.name.toUpperCase()) && (inputNum == e.officeNum) && (inputPhone == e.phoneNum)));

  if (eList.length > 0) {
    $('#content').render('Employee added before');
  } else {
    eList.push(employee);
    employeeList.push(employee);
    $('#content').printAll(eList);
  }
});

$('#deleteSubmit').on('click', function () {
  cleanContent();
  event.preventDefault();

  const inputName = $('#deleteInput').val();
  if (employeeList.find(e => e.name.toUpperCase() === inputName.toUpperCase())) {
    let i = 0;
    while (i < employeeList.length) {
      if ((employeeList[i].name).toUpperCase() === inputName.toUpperCase()) {
        employeeList.splice(i, 1);
        $('#content').render('Employee Deleted');
        break;
      } else
        i++;
    }
  } else
    $('#content').render('Employee Not Found')



  function openSM() {
    document.getElementById("mySidemenu").style.width = "450";
    document.getElementById("pg-content").style.marginleft = "0";
  }
