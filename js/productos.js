function addItem(item){
    const itemHTML = '<div class="card" ">\n' +
        '    <div class="card-header"> <img src='+item.img+' alt="" style="width: 50px;height: 50px;">'+addStars(item.qualification)+'</div>'+
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '       <p class="card-text">'+item.works[0]+'</p>\n'
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    console.log(item.works);
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
function addStars(estrellas){
    let cadena='';
    for(let i=0;i<estrellas;i++){
        cadena+="\u2B50";
    }
    return cadena;

}

addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });
    addItem({'name':'José ',
    'last_name':'López Tellez',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Trabajador con gran experiencia en trabajos de carpinteria',
    'works':["Carpinteria","Herreria"],
    'age':"39",
    'qualification':'5',
    'salary':'500',
    'ubicacion':'Estado de México'
    });


/*
addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'})*/