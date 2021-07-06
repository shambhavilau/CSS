let data= [
    {
        name:'Alan',
        age:'25'
    },
    {
        name:'Ava',
        age:'19'
    },
    {
        name:'Dylan',
        age:'18'
    },
    {
        name:'Alison',
        age:'20'
    },
    {
        name:'Rose',
        age:'22'
    },
    {
        name:'Jane',
        age:'26'
    },
    {
        name:'Jacob',
        age:'23'
    },
    {
        name:'Elena',
        age:'20'
    }
]
const info =document.querySelector('#info');

  let details=data.map(function(item) 
  {
    return('<div>'+item.name+ ' is '+ item.age + ' years old'+'</div>');
  });

  info.innerHTML = details.join('\n');