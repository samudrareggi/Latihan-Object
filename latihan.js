/*

Diberikan array of object dari data di TU kampus :

{
  'Adi': {
    'jurusan': 'TI',
    'nilai': 80
  },
  'Bintang': {
    'jurusan': 'Biologi',
    'nilai': 70
  },
  'Nanda': {
    'jurusan': 'TI',
    'nilai': 90
  },
  'Rama': {
    'jurusan': 'Elektro',
    'nilai': 80
  },
  'Reggi': {
    'jurusan': 'TI',
    'nilai': 100
  },
  'Windy': {
    'jurusan': 'Biologi',
    'nilai': 100
  },
}

Diminta untuk melakukan rekap per Jurusan sehingga data nya menjadi seperti ini :
{
  'TI': {
    'mahasiswa': ['Adi', 'Nanda', 'Reggi'],
    'rata-rata': 90
  },
  'Biologi': {
    'mahasiswa': ['Bintang', 'Windy],
    'rata-rata': 85
  },
  'Elektro': {
    'mahasiswa': ['Rama'],
    'rata-rata': 80
  }
}

*/

function dataObj(data) {
  let result = {};
  for (const key in data) {
    let jurusan = data[key]["jurusan"];
    let nilai = data[key]["nilai"];
    if (!result[data[key]["jurusan"]]) {
      result[data[key]["jurusan"]] = {
        'mahasiswa': [],
        'rata-rata': 0
      }
    }
    result[jurusan]["mahasiswa"].push(key);
    result[jurusan]["rata-rata"] += nilai;
  }
  for (const key in result) {
    result[key]["rata-rata"] = result[key]["rata-rata"] / result[key]["mahasiswa"].length;
  }
  return result;
}

let data = {
  'Adi': {
    'jurusan': 'TI',
    'nilai': 80
  },
  'Bintang': {
    'jurusan': 'Biologi',
    'nilai': 70
  },
  'Nanda': {
    'jurusan': 'TI',
    'nilai': 90
  },
  'Rama': {
    'jurusan': 'Elektro',
    'nilai': 80
  },
  'Reggi': {
    'jurusan': 'TI',
    'nilai': 100
  },
  'Windy': {
    'jurusan': 'Biologi',
    'nilai': 100
  },
}

console.log(dataObj(data));