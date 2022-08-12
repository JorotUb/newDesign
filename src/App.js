import React, { useState } from 'react';
import animatie1 from './assets/animatie1.gif';
import banners from './assets/banner.png';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { FilePicker } from 'react-file-picker';
import client from './Client';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import './App.css';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';


const judete = require('./judete.json')
let jud = []
for(var k in judete) {
  if(judete[k] instanceof Object) {
      jud.push(judete[k].nume)
  }
}
const inwd = window.innerWidth
let col = 6
let spac = 2
if(inwd<=960){
  col =12
  spac =1
}
let modalitate = ["Online", "Fizic"]
let pretentii = ["INLOCUIRE", "RETURNARE", "REPARARE", "REZILIERE", "CONTROL"]
let birouri = ["PRODUSE SI SERVICII ALIMENTARE", "BUNURI NEALIMENTARE", "PRESTARI SERVICII", "PRODUSE SI SERVICII FINANCIAR BANCARE", "BIROU CONTROL SI SUPRAVEGHERE ALIMENTATIE PUBLICA"]
let indexx; let numeprodus;
let indexxx; let numesubcat;

function numeVar(nume){
const produs0 = ["Bunuri de consum","Educatie","Sanatate","Servicii destinate petrecerii timpului liber" ]
const produs1 = ["Bunuri de consum", "Sanatate" ]
const produs2 = ["Bunuri de consum", "Educatie", "Sanatate", "Servicii de furnizare utilitati", "Servicii de transport", "Servicii destinate petrecerii timpului liber", "Servicii pentru public","Servicii postale si de comunicatii electronice","Servicii financiare"]
const produs3 = ["Financiar bancar"]
const produs4 = ["Bunuri de consum"]

const produs00 =["Ape minerale naturale", "Bauturi alcoolice (vin, bere)", "Bauturi nonalcoolice - bauturi racoritoare","Carne si produse din carne","Fructe si legume","Lapte si produse lactate","Miere","Oua","Paine, produse de panificatie si cerealiere","Peste si conserve pe baza de peste","Produse alimentare bio, ecologice, modificate genetic","Produse alimentare traditionale", "Sare, otet, condimente", "Vanzari accelerate si promotionale", "Zahar, produse zaharoase, ciocolata","Alte produse alimentare"]
const produs01 =["Gradinite cu program normal si prelungit / alimentatie / lapte si corn"]
const produs02 =["Aziluri si centre de ingrijire / alimentatie", "Produse nutritionale si tratamente naturiste", "Suplimente alimentare"]
const produs03 =["Restaurante,baruri, catering"]

const produs10 =["Animale, hrana si articole speciale","Articole sportive si de agrement","Auto, moto, velo","Bijuterii din metale pretioase si pietre pretioase","Birotica, papetarie, librarie", "Ceasuri si accesorii","Combustibili si lubrifianti","Cosmetice, intretinere si ingrijire personala", "Detergenti si alte produse chimice", "Electrocasnice","Electronice","Incaltaminte si marochinarie", "Jocuri si jucarii", "Materiale de constructii si bricolaj", "Menaj si uz casnic", "Mobilier si decoratiuni interioare", "Piese si accesorii auto, moto, velo inclusiv anvelope", "Puericultura", "Textile", "Alte produse nealimentare"]
const produs11 =["Medicamente","Parafarmaceutice si similare", "Dispozitive medicale (ochelari, proteze etc.)"]

const produs20 =["Bijuterii, argintarie, ceasuri/orologii, ceasuri de mana si accesorii / reparatii", "Butelii GPL / incarcare"]
const produs21 =["Cursuri de limbi straine, cursuri de conducere auto","Gradinite cu program normal si prelungit / servicii","Institutii de invatamant / camine"]
const produs22 =["Aziluri si centre de ingrijire / servicii", "Cabinete medicale si stomatologice"]
const produs23 =["Servicii de furnizare a apei si servicii conexe","Servicii de furnizare a energiei electrice si servicii conexe", "Servicii de furnizare a gazului si servicii conexe", "Servicii de furnizare energie termica si servicii conexe", "Servicii de salubrizare", "Alte servicii de furnizare utilitati"]
const produs24 =["Servicii de inchiriere","Servicii de parcare","Taxi","Tramvai, troleibuz, autobuz, metrou","Transport – servicii conexe", "Transport aerian", "Transport feroviar", "Transport maritim, fluvial si pe canale interne navigabile"]
const produs25 =["Servicii de relaxare", "Servicii oferite de agentiile de turism", "Concursuri, jocuri de noroc, loterii publicitare", "Echipamente pentru parcuri de distractii", "Pachete de servicii turistice", "Servicii culturale si de divertisment", "Servicii de agrement", "Servicii de cazare turistica", "Servicii sportive si de agrement", "Spatii si locuri de joaca", "Timeshare si alte servicii similare", "Unitati de cazare"]
const produs26 =["Comert in afara spatiilor comerciale / vanzare servicii", "Comert la distanta / vanzare servicii", "Executare la comanda mobilier si tamplarie termopane", "Executare la comanda produse confectii si incaltaminte", "Lucrari de intretinere si reparatii electronice si electrocasnice", "Lucrari de intretinere si reparatii instalatii si imobile","Service auto - moto - velo", "Servicii de consultanta, asistenta, intermediere, recrutare, organizare de evenimente", "Servicii de inchiriere imbracaminte si incaltaminte", "Servicii de infrumusetare si ingrijire personala", "Servicii de ingrijire copii", "Servicii de ingrijire pentru animale de companie", "Servicii de intretinere si curatenie", "Servicii de mutare, relocare si depozitare", "Servicii funerare", "Servicii imobiliare", "Servicii imobiliare rezidentiale", "Servicii juridice si contabilitate", "Spalatorii chimice"]
const produs27 =["Servicii de internet", "Servicii postale si de curierat", "Servicii de telefonie fixa", "Servicii de telefonie mobila","Servicii televiziune"]
const produs28 =["Servicii de schimb valutar"]

const produs30 =["Fonduri de investitii, fonduri de pensii si titluri de valori", "Leasing auto, operational, imobiliar", "Recuperari creante", "Servicii bancare contracte de credit", "Servicii bancare contracte de economisire creditare", "Servicii bancare conturi de economii", "Servicii bancare de cont curent", "Servicii de asigurare si reasigurare (redirectionate la ASF)", "Servicii financiare ATM+uri","Servicii financiare carduri de credit", "Servicii financiare carduri de cumparaturi", "Servicii financiare carduri de debit", "Servicii financiare ipoteci si credite imobiliare", "Servicii financiare"]

const produs40 =["Vanzari accelerate si promotionale","Produse alimentare"]

if(nume === "produs0"){
  return produs0;
}else if(nume === "produs1"){
  return produs1;
}else if(nume === "produs2"){
  return produs2;
}else if(nume === "produs3"){
  return produs3;
}else if(nume === "produs4"){
  return produs4;
}
//////////////////////////
else if(nume === "produs00"){
  return produs00;
}else if(nume === "produs01"){
  return produs01;
}else if(nume === "produs02"){
  return produs02;
}else if(nume === "produs03"){
  return produs03;
}else if(nume === "produs10"){
  return produs10;
}else if(nume === "produs11"){
  return produs11;
}
else if(nume === "produs20"){
  return produs20;
}else if(nume === "produs21"){
  return produs21;
}else if(nume === "produs22"){
  return produs22;
}else if(nume === "produs23"){
  return produs23;
}else if(nume === "produs24"){
  return produs24;
}else if(nume === "produs25"){
  return produs25;
}else if(nume === "produs26"){
  return produs26;
}else if(nume === "produs27"){
  return produs27;
}else if(nume === "produs28"){
  return produs28;
}else if(nume === "produs30"){
  return produs30;
}else if(nume === "produs40"){
  return produs40;
}
}
function App() {

  const handlePrenume = (value) => {
    if(value.target.value.match(/^[A-Za-z ]{1,50}$/)){
      setPrenumepetent(value.target.value)
      setPrenumepetentERR(true)
    }else{
      setPrenumepetentERR(false)
    }
  }
  const handleNume = (value) => {
    if(value.target.value.match(/^[A-Za-z ]{1,50}$/)){
      setNumepetent("--"+ value.target.value)
      setNumepetentERR(true)
    }else{
      setNumepetentERR(false)
    }
  }
  const handleEmail = (value) => {
    if(value.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      setEmailpetent(value.target.value)
      setEmailpetentERR(true)
    }else{
      setEmailpetentERR(false)
    }
  }
  const handleAdresa = (value) => {
    if(value.target.value !== ''){
      setAdresapetent(value.target.value)
      setAdresapetentERR(true)
    }else{
      setAdresapetentERR(false)
    }
  }
  const handleTelefon = (value) => {
    if(value.target.value.match(/^\d{1,20}$/)){
      setTelefonpetent(value.target.value)
      setTelefonpetentERR(true)
    }else{
      setTelefonpetentERR(false)
    }
  }
  const handleJudet = (value) => {
    if(value.target.value !== ''){
      setJudetpetent(value.target.value)
      setJudetpetentERR(true)
    }else{
      setJudetpetentERR(false)
    }
  }
  //State-uri petent
  const [prenumepetent, setPrenumepetent] = useState('');
  const [prenumepetentERR, setPrenumepetentERR] = useState(true);

  const [numepetent, setNumepetent] = useState('');
  const [numepetentERR, setNumepetentERR] = useState(true);

  const [emailpetent, setEmailpetent] = useState('');
  const [emailpetentERR, setEmailpetentERR] = useState(true);

  const [adresapetent, setAdresapetent] = useState('');
  const [adresapetentERR, setAdresapetentERR] = useState(true);
  
  const [telefonpetent, setTelefonpetent] = useState('');
  const [telefonpetentERR, setTelefonpetentERR] = useState(true);

  const [judetpetent, setJudetpetent] = useState('');
  const [judetpetentERR, setJudetpetentERR] = useState(true);

  const handleDenumireOperator = (value) => {
    if(value.target.value.match(/^[A-Za-z ]{1,50}$/)){
      setDenumireoperator("--"+value.target.value)
      setDenumireoperatorERR(true)
    }else{
      setDenumireoperatorERR(false)
    }
  }
  const handleData = (value) => {
    setDataachi(value.target.value)
  }
  const handleCui = (value) => {
    if(value.target.value.match(/^\d{1,20}$/)){
      setCui(value.target.value)
      setCuiERR(true)
    }else{
      setCuiERR(false)
    }
  }
  const handleModalitate = (value) => {
    setModalitateacumpararii(value.target.value)
  }
  const handleAdresaComerciant = (value) => {
    setAdresacomerciant(value.target.value)
  }
  const handleJudetComerciant = (value) => {
    setJudetcomerciant(value.target.value)
  }
  const handleBirou = (event) => {
    setBirou(event.target.value)
    setBirouERR(true)
    indexx = parseInt(birouri.indexOf(event.target.value));
    numeprodus="produs"+indexx.valueOf();
  }

  const handleProdus = (event) => {
    setProdus(event.target.value)
    setProdusERR(true)
    indexxx = parseInt(numeVar(numeprodus).indexOf(event.target.value));
    numesubcat=numeprodus+indexxx.valueOf();
  }
  const handleSubcat = (event) =>{
    setSubcategorie(event.target.value)
    setSubcategorieERR(true)
  }

  const handleDovada = (value) => {
    setDovada(value.target.value)
  }
  const handlepretentiidvs = (value) => {
    setPretentiidvs(value.target.value)
  }
  const handleDetalii = (value) => {
    setDetalii(value.target.value)
  }
  const handleAcord = (value) => {
    if((numeFac !== "" || numeDovada !== "" || numeGarantie !== "" || numeContract !== "" )&& numepetent !=="" && prenumepetent !=="" && emailpetent !== ""
    && telefonpetent !=="" && adresapetent !== "" && judetpetent !== "" && denumireOperator !=="" && dataAchizitionarii !=="" && modalitateaCumparari !==""
    && adresaComerciant !=="" && judetComerciant !=="" && birou !== "" && produs !=="" && subcategorie !=="" && pretentiidvs!=="" ){
      setAcord(value.target.value)
    }else{
      setAcord("necompletat")
    }
  }
  ///State-uri comerciant
  const [denumireOperator, setDenumireoperator] = useState('');
  const [denumireOperatorERR, setDenumireoperatorERR] = useState(true);

  const [dataAchizitionarii, setDataachi] = useState('');
  // const [dataAchizitionariiERR, setDataachiERR] = useState(true);

  const [cui, setCui] = useState('');
  const [cuiERR, setCuiERR] = useState(true);

  const [modalitateaCumparari, setModalitateacumpararii] = useState('');
  // const [modalitateaCumparariERR, setModalitateacumparariiERR] = useState(true);

  const [adresaComerciant, setAdresacomerciant] = useState('');
  // const [adresaComerciantERR, setAdresacomerciantERR] = useState(true);

  const [judetComerciant, setJudetcomerciant] = useState('');
  // const [judetComerciantERR, setJudetcomerciantERR] = useState(true);

  const [birou, setBirou] = useState('');
  const [birouERR, setBirouERR] = useState(true);

  const [produs, setProdus] = useState('');
  const [produsERR, setProdusERR] = useState(true);

  const [subcategorie, setSubcategorie] = useState('');
  const [subcategorieERR, setSubcategorieERR] = useState(true);

  const [dovada, setDovada] = useState('');
  // const [dovadaERR, setDovadaERR] = useState(true);

  const [pretentiidvs, setPretentiidvs] = useState('');
  // const [pretentiidvsERR, setPretentiidvsERR] = useState(true);

  const [detalii, setDetalii] = useState('');
  // const [detaliiERR, setDetaliiERR] = useState(true);

  const [numeFac, setNumeFac] = useState('');
  const [numeDovada, setNumeDovada] = useState('');
  const [numeGarantie, setNumeGarantie] = useState('');
  const [numeContract, setNumeContract] = useState('');
  
  const [facFile, setFacFile] = useState(null);
  const [dovFile, setDovFile] = useState(null);
  const [garaFile, setGaraFile] = useState(null);
  const [conFile, setConFile] = useState(null);

  const [numeNrInre, setNumeNrInre] = useState("");
  const [nrInre, setNrInre] = useState("");
  const [modal, setModal] = useState(false);
  const [acord, setAcord] = useState(false);

  const handlePDFpickerFac = (FileObject) => {
    setFacFile(FileObject)
    setNumeFac(FileObject.name)
  }
  const handlePDFpickerDov = (FileObject) => {
    setDovFile(FileObject)
    setNumeDovada(FileObject.name)
  }
  const handlePDFpickerGara = (FileObject) => {
    setGaraFile(FileObject)
    setNumeGarantie(FileObject.name)
  }
  const handlePDFpickerCon = (FileObject) => {
    setConFile(FileObject)
    setNumeContract(FileObject.name)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#2D4084"),
    backgroundColor: "#2D4084",
    '&:hover': {
      backgroundColor: "#212e5f",
    },
  }));

  // function getNr(){
  //   client.get(`/nrInre`, {})
  //   .then(res => {
  //     const nume = res.data.nume
  //     const nr = res.data.nr
  //     if(nume !== emailpetent){
  //       setTimeout(getNr(), 1000)
  //     }else{
  //       setModal(false)
  //       setNumeNrInre(nume)
  //       setNrInre(nr)
  //       console.log(numeNrInre + "--" + nrInre) 
  //     }

  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  //   }
  const trimiteDate = () => {
    // client.post('/formularWeb',{
    //   nume: numepetent,     
    //   prenume: prenumepetent,     
    //   telefon: telefonpetent,
    //   email: emailpetent,
    //   adresa: adresapetent,
    //   judet: judetpetent,

    //   odenumire: denumireOperator,
    //   odataachi: dataAchizitionarii,
    //   ocui: cui,
    //   omodalitate: modalitateaCumparari,
    //   adresaComerciant: adresaComerciant,
    //   judetComerciant: judetComerciant,

    //   birou: birou,
    //   produs: produs,
    //   subcategorie: subcategorie,
    //   dovada: dovada,
    //   detalii: detalii,
    //   pretentii: pretentiidvs,

    //   numefisier1: numeFac,
    //   numefisier2: numeContract,
    //   numefisier3: numeGarantie,
    //   numefisier4: numeDovada
    // })

    
    // const formData = new FormData() 
    // formData.append('file', facFile)
    // formData.append('file', dovFile)
    // formData.append('file', garaFile)
    // formData.append('file', conFile)

    // axios({
    //   method: "POST",
    //   url: "http://backend.gddservices.ro/formularWebFile",
    //   data: formData,
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // })
    // setModal(true)
    // setTimeout(
    //   function getNr(){
    //     client.get(`/nrInre`, {})
    //     .then(res => {
    //       let nume = res.data.nume
    //       let nr = res.data.nr
    //       if(nume === emailpetent){
    //         setModal(false)
    //         setNumeNrInre(nume)
    //         setNrInre(nr)
    //         console.log(numeNrInre + "--" + nrInre) 
    //       }else{
    //         setTimeout(getNr(), 1000)
    //       }
    
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       setTimeout(getNr(), 1000)
    //     })
    //     }
    //   , 20000)

        axios({
      method: "POST",
      url: "http://192.168.0.217:3001/db",
      data: "test",
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  }
  if(numeNrInre === emailpetent && numeNrInre !== ""){
    return (
      <div className="AppNrInre">
        <div className='containerHeader'>
          <img src={banners} className="banner" alt='Banner'/>
        </div>
      <div className='containere'>
      <Container className='container'>
        <div className='textcontainer'>
          <p className='text1'>Numarul de inregistrare al reclamatiei dvs. este :</p>
          <p className='nrInre'>{nrInre}</p>
          <p className='text1'>Va mai informam:</p>
          <p className='text1'>Conform art.8 si 9 din OG 27/2002, autorităţile şi instituţiile publice sesizate au obligaţia să comunice petiţionarului, în termen de 30 zile de la data înregistrării petiţiei, răspunsul, indiferent dacă soluţia este favorabilă sau nefavorabilă. În situaţia în care aspectele sesizate prin petiţie necesită o cercetare mai amănunţită, conducătorul autorităţii sau instituţiei publice poate prelungi termenul prevăzut cu cel mult 15 zile.</p>
          <p className='text1'>Asteptati raspunsul din partea reprezentantilor institutiei noastre la adresa postala/adresa de posta electronica comunicata de dvs in petitie.</p>
        </div>
      </Container>
      </div>
      </div>
    )
  }
  // }else if(moment().format('dddd') === "Saturday" || moment().format('dddd') === "Sunday" || (moment().format('a') === "am" && moment().format('h') <= 8) || (moment().format('a') === "pm" && moment().format('h') >= 10)){
  //   return (
  //     <div className="App">
  //       <div className="containerBack">
  //         <video className='videoTag' autoPlay loop muted>
  //           <source src={background} type='video/mp4' />
  //         </video>
  //       </div>
  //       <div className='containerHeader'>
  //         <img src={banner} className="banner" alt='Banner'/>
  //       </div>
  //     <div className='containere'>
  //     <Container className='container'>
  //       <div className='textcontainer'>
  //         <h1 className='text1'>Începând cu data 18.05.2022, ora 00.00, până la finalizarea lucrărilor de modernizare a prezentei aplicații, formularul de reclamații online va putea fi utilizat de consumatori după următorul program:</h1>
  //         <h1 className='text1'>• luni-vineri, între orele 8.00 - 22.00.</h1>
  //         <h1 className='text1'>Măsura este necesară pentru ca lucrările începute să se poată derula într-un termen optim și să se poată realiza testările necesare platformei online, care să permită funcționarea ei în parametrii prevăzuți.</h1>
  //       </div>
  //     </Container>
  //     </div>
  //     </div>
  //   )
  // }
  else{
  return (

    <div className="App">
      <div className='lipsabanner'>
        
      </div>
      <div className='containerHeader'>
      <img src={banners} className="banner" alt='Banner'/>
      {/* <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={7} color="black">
            <img src={banners} className="banner" alt='Banner'/>
          </Grid>
          <Grid item xs={3}>
           <Container className='containerHead'>
             <p className='textHeader'>GUVERNUL ROMÂNIEI</p>
             <p className='textHeader'>AUTORITATEA NAȚIONALĂ PENTRU</p>
             <p className='textHeader'>PROTECȚIA CONSUMATORILOR</p>
           </Container>
          </Grid>
        </Grid> */}
      <Grid className='footer' direction='row'  container spacing={2} marginTop='20px' >
      <Grid item xs={12}>
        <a href='https://anpc.ro/'>
          <p className='text7' >← INAPOI PE WEBSITE-UL ANPC</p>
        </a>
      </Grid>
      </Grid>
      </div>
      
      <div className='containere'>
        <div>
        <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='text1' id="modal-modal-title" variant="h6" component="h2">
            Reclamatie in curs de trimitere !
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <CircularProgress />
          </Box>
        </Box>
      </Modal>
        </div>
        
        <h1 className='title'>FORMULAR SESIZARE ONLINE</h1>
        <Container className='container'>
          <img className="animatie" src={animatie1} alt="animatie1"/>
        </Container>
      {/* <Container className='container'>
        <div className='textcontainer'>
        <h1 className='text2'>Informatii - Program de lucru</h1>
          <p className='text1'>Începând cu data 18.05.2022, ora 00.00, până la finalizarea lucrărilor
            de modernizare a prezentei aplicații, formularul de reclamații online
            va putea fi utilizat de consumatori după următorul program:</p>
          <p className='text1'>• luni-vineri, între orele 8.00 - 22.00.</p>
          <p className='text1'>Măsura este necesară pentru ca lucrările începute să se poată derula
            într-un termen optim și să se poată realiza testările necesare platformei
            online, care să permită funcționarea ei în parametrii prevăzuți.</p>
        </div>
      </Container> */}
      <Container className='container2'>
      {/* <div className='textcontainer'>
      <h1 className='text2'>Inainte de a depune reclamatia !</h1>
        <p className='text1'>Vă rugăm să apelaţi la această modalitate numai după ce încercaţi să rezolvaţi amiabil problema cu operatorul economic care a comercializat produsul sau a prestat serviciul. În situaţia în care nu aţi ajuns la o înţelegere cu vânzătorul sau cu administratorul unităţii, atunci aveţi dreptul să depuneţi o reclamaţie.</p>
        <p className='text1'> Reclamaţia sau sesizarea se face în nume personal. Reclamaţiile şi sesizările adresate ANPC pot fi depuse doar de către consumatori persoane fizice. Divergenţele între operatorii economici nu intră în sfera de competenţă a Autorităţii Naţionala pentru Protecţia Consumatorilor.</p>
        <p className='text1'>Daca doriți să aduceți completări unei reclamații deja depuse, vă rugăm să completați din nou formularul online de mai jos, menționând numărul reclamației la care adăugați detalii suplimentare.
          Pentru operatorii economici cu sediul în afara României (în alte state membre ale EU, plus Norvegia, Islanda și Marea Britanie) sunteți rugați să vă adresați Centrului European al Consumatorilor din România accesând acest link. Pentru mai multe detalii, puteți consulta și această pagină.</p>
        
      </div> */}
      <h1 className='text2'>Datele dvs. de contactat</h1>
      <Grid direction='row' container spacing={spac} marginBottom='10px'>
        <Grid item xs={col} color="black">
          <TextField error={!prenumepetentERR} className='textfield' fullWidth id="Prenume" label="Prenume" variant="filled"  onChange={handlePrenume}/>
        </Grid>
        <Grid item xs={col}>
          <TextField error={!numepetentERR} className='textfield' fullWidth id="Nume" label="Nume" variant="filled" onChange={handleNume}/>
        </Grid>
      </Grid>
      <Grid direction='row' container spacing={spac} marginBottom='10px'>
        <Grid item xs={col} color="black">
          <TextField error={!emailpetentERR} className='textfield' fullWidth id="Email" label="E-mail" variant="filled" onChange={handleEmail} />
        </Grid>
        <Grid item xs={col}>
          <TextField error={!telefonpetentERR} className='textfield' fullWidth id="Telefon" label="Telefon" variant="filled" type="number" onChange={handleTelefon}/>
        </Grid>
      </Grid>
      <Grid direction='row' container spacing={spac} marginBottom='10px'>
        <Grid item xs={col} color="black">
          <TextField error={!adresapetentERR} className='textfield' fullWidth id="Adresa" label="Adresa - Strada, Nr, (Bl,Et,Ap)" variant="filled" onChange={handleAdresa}/>
        </Grid>
        <Grid item xs={col}>
        <TextField error={!judetpetentERR} fullWidth className='textfield'id="judet" select label="Judet"variant="filled" onChange={handleJudet}
      >{jud.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
        </Grid>
      </Grid>
      <h1 className='text3'>Datele comerciantului</h1>
      <Grid direction='row' container spacing={spac} marginBottom='10px'>
        <Grid item xs={col} color="black">
          <TextField className='textfield' fullWidth id="OperatorEconomic" label="Denumire Operator Economic" variant="filled" onChange={handleDenumireOperator}/>
        </Grid>
        <Grid item xs={col}>
          <TextField className='textfield' fullWidth id="DataAchizitionarii" label="Data achizitionarii - ( zz.mm.aaaa )" variant="filled" onChange={handleData}/>
        </Grid>
      </Grid>

      <Grid direction='row' container spacing={spac} marginBottom='10px'>
        <Grid item xs={col} color="black">
          <TextField className='textfield' fullWidth id="CUI" label="CUI" variant="filled" onChange={handleCui}/>
        </Grid>
        <Grid item xs={col}>
        <TextField fullWidth className='textfield'id="ModalitateaCumpararii" select label="Modalitatea Cumpararii"variant="filled" onChange={handleModalitate}
      >{modalitate.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
        </Grid> 
      </Grid>

      <Grid direction='row' container spacing={spac} marginBottom='10px'>
        <Grid item xs={col} color="black">
          <TextField className='textfield' fullWidth id="Adresa" label="Adresa Comerciant - Strada, Nr" variant="filled" onChange={handleAdresaComerciant}/>
        </Grid>
        <Grid item xs={col}>
        <TextField fullWidth className='textfield'id="judet" select label="Judet"variant="filled" onChange={handleJudetComerciant}
      >{jud.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
        </Grid>
      </Grid>
        
      <Grid direction='row' container spacing={spac} marginBottom='10px'>
        <Grid item xs={col}>
         <TextField fullWidth className='textfield'id="pretentiile " select label="Pretentiile dumneavoastra"variant="filled" onChange={handlepretentiidvs}
         >{pretentii.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
         </TextField>
        </Grid>
      </Grid>

      <div className='textfieldWidth'>
      <FormControl fullWidth>
        <InputLabel >BirouReclamatii</InputLabel>
        <Select fullWidth value={birou} id="BirouReclamatii" label="Birou reclamatii"onChange={handleBirou}>
        {birouri.map((item,index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
        </Select>
      </FormControl>
      </div>
      <>
      {indexx >= 0
      ?<div className='textfieldWidth'>
      <FormControl fullWidth>
        <InputLabel >Produs/Serviciu reclamat</InputLabel>
        <Select fullWidth value={produs} id="Produs" label="Produs/Serviciu reclamat"onChange={handleProdus}>
        {numeVar(numeprodus).map((item,index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
        </Select>
      </FormControl>
      </div>
      :null
      }
     </>

     <>
      {indexxx >= 0
      ?<div className='textfieldWidth'>
      <FormControl fullWidth>
        <InputLabel >Subcategorie Produs/Serviciu*</InputLabel>
        <Select fullWidth value={subcategorie} id="subcat" label="Subcategorie Produs/Serviciu*"onChange={handleSubcat}>
        {numeVar(numesubcat).map((item,index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
        </Select>
      </FormControl>
      </div>
      :null
      }
     </>
      <TextareaAutosize 
        aria-label="minimum height"
        minRows={10}
        placeholder="Dovada adresarii operatorului economic"
        className='textarea'
        onChange={handleDovada}
      />
      <TextareaAutosize
        aria-label="minimum height"
        minRows={10}
        placeholder="Detalii cu privire la aspectele reclamate"
        className='textarea'
        onChange={handleDetalii}
      />
      <h1 className='text3'>Documente probatorii</h1>
      <Container className='container3'>
        <p className='text1'>Atasati cel putin un document probatoriu. Fisierele acceptate sunt de tip imagine sau pdf.</p>
        <p className='text1'>Va rugam NU atasati acelasi document de mai multe ori.</p>
        <p className='text1'> Reclamatia/sesizarea dvs se rezolvă în termenul legal (conform prevederilor O.G. nr. 27/2002), cu conditia ca aceasta sa fie însotita de documente probatorii, respectiv factura fiscala, bon fiscal sau chitanta, contract, certificat de garantie sau alte documente, dupa caz.</p>
      </Container>
      <Container maxWidth="lg" className='containerDocumente'>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
          <h1 className='text4'>Factura / Bon Fiscal / Chitanta</h1>
          </Grid>
          <Grid item xs={6}>
          <FilePicker
              extensions={['pdf', 'jpg', 'jpeg']}
              onChange={(FileObject)=>{ handlePDFpickerFac(FileObject)}}
            >
            <ColorButton className="buttonIncarcare" fullWidth variant="contained" >Incarca</ColorButton>
            </FilePicker>
          </Grid>
        </Grid>
          <p>{numeFac}</p>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
          <h1 className='text4'>Contract</h1>
          </Grid>
          <Grid item xs={6}>
            <FilePicker
                extensions={['pdf', 'jpg', 'jpeg']}
                onChange={(FileObject)=>{ handlePDFpickerCon(FileObject)}}
              >
            <ColorButton className="buttonIncarcare" fullWidth variant="contained">Incarca</ColorButton>
            </FilePicker>
          </Grid>
        </Grid>
          <p>{numeContract}</p>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
          <h1 className='text4'>Certificat de garantie</h1>
          </Grid>
          <Grid item xs={6}>
            <FilePicker
                  extensions={['pdf', 'jpg', 'jpeg']}
                  onChange={(FileObject)=>{ handlePDFpickerGara(FileObject)}}
                >
            <ColorButton className="buttonIncarcare" fullWidth variant="contained">Incarca</ColorButton>
            </FilePicker>
          </Grid>
        </Grid>
        <p>{numeGarantie}</p>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
          <h1 className='text4'>Dovada adresarii operatorului</h1>
          </Grid>
          <Grid item xs={6}>
            <FilePicker
                  extensions={['pdf', 'jpg', 'jpeg']}
                  onChange={(FileObject)=>{ handlePDFpickerDov(FileObject)}}
                >
            <ColorButton className="buttonIncarcare" fullWidth variant="contained">Incarca</ColorButton>
            </FilePicker>
          </Grid>
        </Grid>
        <p>{numeDovada}</p>
      </Container>
      
      <Container className='container3'>
      <Grid direction='row' container spacing={2} marginBottom='10px'>

          <Grid item xs={12}>
          <p className='text4'>
          Am citit Politica de confidențialitate și sunt de acord cu prelucrarea datelor mele cu caracter personal în scopul rezolvării reclamației expediată pe această cale.
            <Radio checked={acord === 'acord'} onChange={handleAcord} value="acord" className="radio-buttons" inputProps={{ 'aria-label': 'A' }} />
            </p>
          </Grid>
        </Grid>
      
      { acord === "necompletat"
        ?<p className='text5'>Va rugam completati formularul !</p>
        :null
      }
      { acord !== "acord"
        ?<ColorButton className="buttonIncarcare" fullWidth variant="contained" onClick={()=>{trimiteDate()} }>Trimite reclamatia</ColorButton>
        :<ColorButton disabled className="buttonIncarcare" fullWidth variant="contained" >Trimite reclamatia</ColorButton>
      }
      </Container>
    </Container>
      </div>
      <Grid className='footer' direction='row'  container spacing={2} marginTop='30px' >
      <Grid item xs={12}>
      <p className='text6'>Copyright © 2022 Autoritatea Naţională pentru Protecţia Consumatorilor</p>
      </Grid>
      </Grid>
    </div>
  );
           }
  }

export default App;
