function introduction(name) {
  console.log('Shakera')
  return (`Hi, my name is ${name}.`);
  }


function introductionWithLanguage(name, language) {
  console.log('Shakera, JavaScript')
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

function introductionWithLanguageOptional(name, language = "JavaScript") {
  console.log('Shakera', 'Python')
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}


