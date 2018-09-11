const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const command = prompt('input command');
let inputName;

const run command = function(){
  let userName;
  switch (command){
    case 'print':
    employeeList.forEach(e => renderEmployee(e));
    break;
    case 'lookup'
  }
}

const printAll = function(){
  for (let i = 0; i < employeeList.length; i++) {
       render(`${employeeList[i].name}`);
       render(`#${employeeList[i].officeNum}`);
       render(`${employeeList[i].phoneNum}`);
       breakLine();
   }
}

const print = function(i){
  render(`${employeeList[i].name}`);
  render(`#${employeeList[i].officeNum}`);
  render(`${employeeList[i].phoneNum}`);
  breakLine();
}

const breakLine = function(){
  document.getElementById('content').appendChild(document.createElement('br'));
}

 if (command.toLowerCase() === 'print') {
   printAll();
 } 
 else if (command.toLowerCase() === 'verify') {
   inputName = prompt('input name');
   let isExist =false;

   for (let i = 0; i < employeeList.length; i++) {
     if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
       isExist = true;
     }
   }
   render(isExist);
 }
 else if (command.toLowerCase() === 'lookup') {
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
      print(i); 
    }
  }
} 
else if(command.toLowerCase() === 'contains'){
    let str = prompt('input string');
    for (let i = 0; i < employeeList.length; i++) {
      if ((employeeList[i].name).toUpperCase().includes(str.toUpperCase())) {
        print(i);
      }
    }
 }
 else if(command.toLowerCase() === 'update'){
  inputName = prompt('input name');
  const field = prompt('input field that you want to change it');
  const value = prompt('input new value for field');

  for (let i = 0; i < employeeList.length; i++) {
    if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
      if (field.toLowerCase() === 'name') {
        employeeList[i].name = value;
      }
      else if(field.toLowerCase() === 'office number'){
        employeeList[i].officeNum = value;
      }
      else if(field.toLowerCase() === 'phone number'){
        employeeList[i].phoneNum = value;
      }
      print(i);
    }
  }
}
else if(command.toLowerCase() === 'add'){
  inputName = prompt('input name');
  const officeNum = prompt('input Office Number');
  const phoneNum = prompt('input Phone Number');

  const employee = {
  name: inputName,
  phoneNum: phoneNum,
  officeNum: officeNum
};
  employeeList.push(employee);
  printAll();
}
else if(command.toLowerCase() === 'delete'){
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if ((employeeList[i].name).toUpperCase() === inputName.toUpperCase()) {
      employeeList.splice(i,1);
    } 
  }
  printAll();
}

const showInput = function (){
  $('input').addClass('show');
}

const hide input = function (){
  $('input').removeClass('show');
}

$('#verify').on('click', showInput);
$('#print').on('click', hideInput)
