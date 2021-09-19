const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
function createArrayOfArrays(countries) {
    var countrieArray = new Array();
    for (i in countries) {
      let a = new Array();
      a.push(countries[i])
      a.push(countries[i].slice(0, 3));
      a.push(countries[i].length);
      countriesArray.push(a);
    }
    return countriesArray;
  }
  console.log(createArrayOfArrays(countries));
  // 2
  
  const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

  function scoresGreaterThan85(users) {
    const result = users.filter((user) => user.scores > 85);
    return result;
  }
  
  function addUser(users, newuser) {
    let result = users.filter((user) => user.name == newuser.name);
    if (result.length > 0) {
      return "User already exists";
    }
    users.push(newuser);
  }
  
  function addUserSkill(users, user, skill) {
    for (i in users) {
      if ((i.name = user.name)) {
        i.skill.push(skill);
      }
    }
  }
  
  function editUser(users, user) {
    for (i in users) {
      if ((i.name = user.name)) {
        i = user;
      }
    }
  }