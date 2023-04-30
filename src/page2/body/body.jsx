import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./body.css";
const Body = () => {
  const [arr, setarr] = React.useState([
    {
      id: "2332",
      name: "Zhanna Markov",
      stir: 90176227449527,
      count: 1,
      device: "Nokia 8",
      number: "+998 50 953 44 08",
      bloc: false
    },
    {
      id: "1439",
      name: "Roksana Naoumov",
      stir: 25918984490673,
      count: 2,
      device: "iPhone 12 Pro",
      number: "+998 99 654 4298",
      bloc: false
    },
    {
      id: "2014",
      name: "Raya Romanov",
      stir: 19866141137989,
      count: 3,
      device: "LG Q8",
      number: "+998 99 029 7412",
      bloc: false
    },
    {
      id: "3142",
      name: "Arkadiy Naumov",
      stir: 14653190075941,
      count: 4,
      device: "Huawei Mate 40",
      number: "+998 99 415 7029",
      bloc: false
    },
    {
      id: "3194",
      name: "Larisa Ignatiev",
      stir: 57189694904278,
      count: 5,
      device: "ZTE nubia Red Magic 6",
      number: "+998 99 584 9550",
      bloc: false
    },
    {
      id: "3854",
      name: "Borislav Vasilyev",
      stir: 57563435116677,
      count: 6,
      device: "Galaxy S9+",
      number: "+998 99 209 8401",
      bloc: false
    },
    {
      id: "5219",
      name: "Roza Lebedev",
      stir: 33095479931499,
      count: 7,
      device: "Galaxy S10e",
      number: "+998 99 551 7121",
      bloc: false
    },
    {
      id: "7673",
      name: "Savely Maksimov",
      stir: 89697974513509,
      count: 8,
      device: "Meizu 18 Pro",
      number: "+998 99 738 7650",
      bloc: false
    },
    {
      id: "7976",
      name: "Varlaam Pasternak",
      stir: 65674855569224,
      count: 9,
      device: "LG Q6",
      number: "+998 99 389 0304",
      bloc: false
    },
    {
      id: "8390",
      name: "Filipp Orlov",
      stir: 85469481256305,
      count: 10,
      device: "Galaxy S7",
      number: "+998 99 196 9145",
      bloc: false
    },
    {
      id: "8716",
      name: "Boris Kozlov",
      stir: 17743468511340,
      count: 11,
      device: "Sony Xperia L1",
      number: "+998 99 520 8595",
      bloc: false
    },
    {
      id: "1582",
      name: "Alesya Smirnov",
      stir: 30295330087109,
      count: 12,
      device: "Samsung Galaxy S21 5G",
      number: "+998 99 625 7879",
      bloc: false
    },
    {
      id: "4117",
      name: "Isay Pavlov",
      stir: 61348082968901,
      count: 13,
      device: "Red Hydrogen One",
      number: "+998 99 098 7387",
      bloc: false
    },
    {
      id: "4371",
      name: "Mariya Konstantinov",
      stir: 90584489178186,
      count: 14,
      device: "Sony Xperia 1 III",
      number: "+998 99 172 0900",
      bloc: false
    },
    {
      id: "4473",
      name: "Agniya Matveev",
      stir: 74139880901797,
      count: 15,
      device: "Huawei P10",
      number: "+998 99 490 7039",
      bloc: false
    },
    {
      id: "7475",
      name: "Sonya Popov",
      stir: 10240494070598,
      count: 16,
      device: "ZTE nubia Z30 Pro",
      number: "+998 99 831 2349",
      bloc: false
    },
    {
      id: "7912",
      name: "Viktor Chaykovsky",
      stir: 73964644970635,
      count: 17,
      device: "Motorola E4",
      number: "+998 99 736 5519",
      bloc: false
    },
    {
      id: "8165",
      name: "Kolya Lagunov",
      stir: 31714279247921,
      count: 18,
      device: "Blackberry DTEK 60",
      number: "+998 99 082 3054",
      bloc: false
    },
    {
      id: "9332",
      name: "Diana Markov",
      stir: 97235634533132,
      count: 19,
      device: "Nokia 3",
      number: "+998 99 474 9599",
      bloc: false
    },
    {
      id: "9469",
      name: "Akim Sokolov",
      stir: 51779807453244,
      count: 20,
      device: "OnePlus 8 Pro",
      number: "+998 99 051 7637",
      bloc: false
    },
  ]);
  const [val1, setval1] = React.useState('')
  const [val2, setval2] = React.useState('')
  const [val3, setval3] = React.useState('')
  const [val4, setval4] = React.useState('')
  const [val5, setval5] = React.useState('')
  const [val6, setval6] = React.useState('')
    function run(){
        const box = [...arr] 
        box.push({
            id: val1,
            name: val2,
            number: val3,
            stir: val4,
            device: val5,
            bloc: false
        })
        setarr(box)
       
    }
   
    const idSerach =  arr.filter(e =>{
       return e.id.includes(val6.toLowerCase())
       
    })

    function block(ind){
        const ss = [...arr]
        arr[ind].bloc = true
        setarr(ss)
    }
    function unBlock(i){
        const ss = [...arr]
        arr[i].bloc = false
        setarr(ss)
    }   
    function del(del){
        const ss = [...arr]
        ss.splice(ss[del], 1)
        setarr(ss)
    }
  return (
    <div className="container ">

      <div className="ModalAndSearch container w-100">
        <div>
          <h5 className="mx-3">ID orqali qidirish</h5>
          <input type="search" placeholder="ID" className="inputserach" onChange={(val)=>setval6(val.target.value)}  />
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {" "}
            Qo’shish
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                    <input type="text" onChange={(val)=>setval1(val.target.value)}  className="form-control w-75 mt-2" placeholder="ID..." />
                    <input type="text" onChange={(val)=>setval2(val.target.value)}  className="form-control w-75 mt-2" placeholder="Name..."/>
                    <input type="text" onChange={(val)=>setval3(val.target.value)}  className="form-control w-75 mt-2" placeholder="Number..."/>
                    <input type="text" onChange={(val)=>setval4(val.target.value)}  className="form-control w-75 mt-2" placeholder="JShir..."/>
                    <input type="text" onChange={(val)=>setval5(val.target.value)}  className="form-control w-75 mt-2" placeholder="Qurilma..."/>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" onClick={run}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="tableDiv">

        <table className="table tableDiv">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Telefon</th>
                    <th>JShShIR</th>
                    <th>Qurilma</th>
                    <th>Sozlama</th>
                </tr>
            </thead>
            <tbody>
                {
                    idSerach.map((iteam , index) =>{
                        return(
                            <tr key={index}  className={(iteam.bloc)? 'blockClass': ''} >
                                <td>{iteam.id}</td>
                                <td>{iteam.name}</td>
                                <td>{iteam.number}</td>
                                <td>{iteam.stir}</td>
                                <td>{iteam.device}</td>
                                <td><div class="dropdown">
  <a class="btn bi bi-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                
  </a>

  <ul class="dropdown-menu">
    <li className="text-danger fw-bold" onClick={()=>block(index)} ><i class="bi bi-lock"></i> Bloklash</li>
    <li className="text-success fw-bold" onClick={()=>unBlock(index)} ><i class="bi bi-unlock"></i> Blokdan chiqarish</li>
    <li className="text-danger fw-bold" onClick={()=>del(index)}><i class="bi bi-sign-stop"></i> Sessiyani tugatish</li>
    <li className="text-primary fw-bold"><i class="bi bi-card-list"></i> Taxrirlash</li>
  </ul>
</div></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>

    </div>
  );
};

export default Body;
