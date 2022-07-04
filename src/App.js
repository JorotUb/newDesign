import React, { useState } from 'react';
import background from './assets/videoBackGround.mp4';
import banner from './assets/banner1.jpg';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FilePicker } from 'react-file-picker';
import client from './Client';
import axios from 'axios';
import './App.css';
import { render } from '@testing-library/react';

const judete = require('./judete.json')
let jud = []
for(var k in judete) {
  if(judete[k] instanceof Object) {
      jud.push(judete[k].nume)
  }
}
let modalitate = ["Online", "Fizic"]
let pretentii = ["INLOCUIRE", "RETURNARE", "REPARARE", "REZILIERE", "CONTROL"]
let birouri = ["PRODUSE SI SERVICII ALIMENTARE", "BUNURI NEALIMENTARE", "PRESTARI SERVICII", "PRODUSE SI SERVICII FINANCIAR BANCARE", "BIROU CONTROL SI SUPRAVEGHERE ALIMENTATIE PUBLICA"]

// const produs0 = ["Bunuri de consum","Educatie","Sanatate","Servicii destinate petrecerii timpului liber" ]
// const produs1 = ["Bunuri de consum", "Sanatate" ]
// const produs2 = ["Bunuri de consum", "Educatie", "Sanatate", "Servicii de furnizare utilitati", "Servicii de transport", "Servicii destinate petrecerii timpului liber", "Servicii pentru public","Servicii postale si de comunicatii electronice","Servicii financiare"]
// const produs3 = ["Financiar bancar"]
// const produs4 = ["Bunuri de consum"]

// const subcat00 =["Ape minerale naturale", "Bauturi alcoolice (vin, bere)", "Bauturi nonalcoolice - bauturi racoritoare","Carne si produse din carne","Fructe si legume","Lapte si produse lactate","Miere","Oua","Paine, produse de panificatie si cerealiere","Peste si conserve pe baza de peste","Produse alimentare bio, ecologice, modificate genetic","Produse alimentare traditionale", "Sare, otet, condimente", "Vanzari accelerate si promotionale", "Zahar, produse zaharoase, ciocolata","Alte produse alimentare"]
// const subcat01 =["Gradinite cu program normal si prelungit / alimentatie / lapte si corn"]
// const subcat02 =["Aziluri si centre de ingrijire / alimentatie", "Produse nutritionale si tratamente naturiste", "Suplimente alimentare"]
// const subcat03 =["Restaurante,baruri, catering"]

// const subcat10 =["Animale, hrana si articole speciale","Articole sportive si de agrement","Auto, moto, velo","Bijuterii din metale pretioase si pietre pretioase","Birotica, papetarie, librarie", "Ceasuri si accesorii","Combustibili si lubrifianti","Cosmetice, intretinere si ingrijire personala", "Detergenti si alte produse chimice", "Electrocasnice","Electronice","Incaltaminte si marochinarie", "Jocuri si jucarii", "Materiale de constructii si bricolaj", "Menaj si uz casnic", "Mobilier si decoratiuni interioare", "Piese si accesorii auto, moto, velo inclusiv anvelope", "Puericultura", "Textile", "Alte produse nealimentare"]
// const subcat11 =["Medicamente","Parafarmaceutice si similare", "Dispozitive medicale (ochelari, proteze etc.)"]

// const subcat20 =["Bijuterii, argintarie, ceasuri/orologii, ceasuri de mana si accesorii / reparatii", "Butelii GPL / incarcare"]
// const subcat21 =["Cursuri de limbi straine, cursuri de conducere auto","Gradinite cu program normal si prelungit / servicii","Institutii de invatamant / camine"]
// const subcat22 =["Aziluri si centre de ingrijire / servicii", "Cabinete medicale si stomatologice"]
// const subcat23 =["Servicii de furnizare a apei si servicii conexe","Servicii de furnizare a energiei electrice si servicii conexe", "Servicii de furnizare a gazului si servicii conexe", "Servicii de furnizare energie termica si servicii conexe", "Servicii de salubrizare", "Alte servicii de furnizare utilitati"]
// const subcat24 =["Servicii de inchiriere","Servicii de parcare","Taxi","Tramvai, troleibuz, autobuz, metrou","Transport – servicii conexe", "Transport aerian", "Transport feroviar", "Transport maritim, fluvial si pe canale interne navigabile"]
// const subcat25 =["Servicii de relaxare", "Servicii oferite de agentiile de turism", "Concursuri, jocuri de noroc, loterii publicitare", "Echipamente pentru parcuri de distractii", "Pachete de servicii turistice", "Servicii culturale si de divertisment", "Servicii de agrement", "Servicii de cazare turistica", "Servicii sportive si de agrement", "Spatii si locuri de joaca", "Timeshare si alte servicii similare", "Unitati de cazare"]
// const subcat26 =["Comert in afara spatiilor comerciale / vanzare servicii", "Comert la distanta / vanzare servicii", "Executare la comanda mobilier si tamplarie termopane", "Executare la comanda produse confectii si incaltaminte", "Lucrari de intretinere si reparatii electronice si electrocasnice", "Lucrari de intretinere si reparatii instalatii si imobile","Service auto - moto - velo", "Servicii de consultanta, asistenta, intermediere, recrutare, organizare de evenimente", "Servicii de inchiriere imbracaminte si incaltaminte", "Servicii de infrumusetare si ingrijire personala", "Servicii de ingrijire copii", "Servicii de ingrijire pentru animale de companie", "Servicii de intretinere si curatenie", "Servicii de mutare, relocare si depozitare", " Servicii funerare", "Servicii imobiliare", "Servicii imobiliare rezidentiale", "Servicii juridice si contabilitate", "Spalatorii chimice"]
// const subcat27 =["Servicii de internet", "Servicii postale si de curierat", "Servicii de telefonie fixa", "Servicii de telefonie mobila","Servicii televiziune"]
// const subcat28 =["Servicii de schimb valutar"]

// const subcat30 =["Fonduri de investitii, fonduri de pensii si titluri de valori", "Leasing auto, operational, imobiliar", "Recuperari creante", "Servicii bancare contracte de credit", "Servicii bancare contracte de economisire creditare", "Servicii bancare conturi de economii", "Servicii bancare de cont curent", "Servicii de asigurare si reasigurare (redirectionate la ASF)", "Servicii financiare ATM+uri","Servicii financiare carduri de credit", "Servicii financiare carduri de cumparaturi", "Servicii financiare carduri de debit", "Servicii financiare ipoteci si credite imobiliare", "Servicii financiare"]

// const subcat40 =["Vanzari accelerate si promotionale","Produse alimentare"]

let numesubgrupa=""; let numesubgrupaprodus="";
let indexx=-1;let indexxx=-1;
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
      setNumepetent(value.target.value)
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
      setDenumireoperator(value.target.value)
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
  const handleBirou = (value) => {
    setBirou(value.target.value)
    setBirouERR(true)
    this.indexx = parseInt(birouri.indexOf(value.target.value)-1);
    this.numesubgrupa="produs"+this.indexx.valueOf();
  }
  const handleProdus = (value) => {
    setProdus(value.target.value)
    setProdusERR(true)

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
  ///State-uri comerciant
  const [denumireOperator, setDenumireoperator] = useState('');
  const [denumireOperatorERR, setDenumireoperatorERR] = useState(true);

  const [dataAchizitionarii, setDataachi] = useState('');
  const [dataAchizitionariiERR, setDataachiERR] = useState(true);

  const [cui, setCui] = useState('');
  const [cuiERR, setCuiERR] = useState(true);

  const [modalitateaCumparari, setModalitateacumpararii] = useState('');
  const [modalitateaCumparariERR, setModalitateacumparariiERR] = useState(true);

  const [adresaComerciant, setAdresacomerciant] = useState('');
  const [adresaComerciantERR, setAdresacomerciantERR] = useState(true);

  const [judetComerciant, setJudetcomerciant] = useState('');
  const [judetComerciantERR, setJudetcomerciantERR] = useState(true);

  const [birou, setBirou] = useState('');
  const [birouERR, setBirouERR] = useState(true);

  const [produs, setProdus] = useState('');
  const [produsERR, setProdusERR] = useState(true);

  const [subgategorie, setSubgategorie] = useState('');
  const [subgategorieERR, setSubgategorieERR] = useState(true);

  const [dovada, setDovada] = useState('');
  const [dovadaERR, setDovadaERR] = useState(true);

  const [pretentiidvs, setPretentiidvs] = useState('');
  const [pretentiidvsERR, setPretentiidvsERR] = useState(true);

  const [detalii, setDetalii] = useState('');
  const [detaliiERR, setDetaliiERR] = useState(true);

  const [numeFac, setNumeFac] = useState('');
  const [numeDovada, setNumeDovada] = useState('');
  const [numeGarantie, setNumeGarantie] = useState('');
  const [numeContract, setNumeContract] = useState('');
  
  const [facFile, setFacFile] = useState(null);
  const [dovFile, setDovFile] = useState(null);
  const [garaFile, setGaraFile] = useState(null);
  const [conFile, setConFile] = useState(null);

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

  const trimiteDate = () =>{
    // let  idPetentSiNume = emailpetent.replace('@','').replace('.','')+numeFac

    client.post('/formularWeb',{
      nume: numepetent,     
      prenume: prenumepetent,     
      telefon: telefonpetent,
      email: emailpetent,
      adresa: adresapetent,
      judet: judetpetent,

      odenumire: denumireOperator,
      odataachi: dataAchizitionarii,
      ocui: cui,
      omodalitate: modalitateaCumparari,
      adresaComerciant: adresaComerciant,
      judetComerciant: judetComerciant,

      birou: birou,
      produs: produs,
      subgategorie: subgategorie,
      dovada: dovada,
      detalii: detalii,
      pretentii: pretentiidvs,

      numefisier1: numeFac,
      numefisier2: numeContract,
      numefisier3: numeGarantie,
      numefisier4: numeDovada
    })

    
    const formData = new FormData() 
    formData.append('file', facFile)
    formData.append('file', dovFile)
    formData.append('file', garaFile)
    formData.append('file', conFile)

    axios({
      method: "POST",
      url: "http://51.13.117.87/formularWebFile",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })

  }

  return (
    <div className="App">
      <div className="containerBack">
      <video className='videoTag' autoPlay loop muted>
        <source src={background} type='video/mp4' />
      </video>
      </div>
      <div className='containerHeader'>
        <img src={banner} className="banner" alt='Banner'/>
      </div>
      <div className='containere'>
        
      <Container className='container'>
        <div className='textcontainer'>
          <h1 className='text1'>Începând cu data 18.05.2022, ora 00.00, până la finalizarea lucrărilor
            de modernizare a prezentei aplicații, formularul de reclamații online
            va putea fi utilizat de consumatori după următorul program:</h1>
          <h1 className='text1'>• luni-vineri, între orele 8.00 - 22.00.</h1>
          <h1 className='text1'>Măsura este necesară pentru ca lucrările începute să se poată derula
            într-un termen optim și să se poată realiza testările necesare platformei
            online, care să permită funcționarea ei în parametrii prevăzuți.</h1>
        </div>
      </Container>
      <Container className='container2'>
        <div className='textcontainer'>
          <h1 className='text1'>Vă rugăm să apelaţi la această modalitate numai după ce încercaţi să rezolvaţi amiabil problema cu operatorul economic care a comercializat produsul sau a prestat serviciul. În situaţia în care nu aţi ajuns la o înţelegere cu vânzătorul sau cu administratorul unităţii, atunci aveţi dreptul să depuneţi o reclamaţie. Reclamaţia sau sesizarea se face în nume personal. Reclamaţiile şi sesizările adresate ANPC pot fi depuse doar de către consumatori persoane fizice. Divergenţele între operatorii economici nu intră în sfera de competenţă a Autorităţii Naţionala pentru Protecţia Consumatorilor.
            Daca doriți să aduceți completări unei reclamații deja depuse, vă rugăm să completați din nou formularul online de mai jos, menționând numărul reclamației la care adăugați detalii suplimentare.
            Pentru operatorii economici cu sediul în afara României (în alte state membre ale EU, plus Norvegia, Islanda și Marea Britanie) sunteți rugați să vă adresați Centrului European al Consumatorilor din România accesând acest link. Pentru mai multe detalii, puteți consulta și această pagină.</h1>
          <h1>Formular Reclamatii</h1>
          
        </div>
        <h1 className='text2'>Datele dvs. pentru a putea fi contactat</h1>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField error={!prenumepetentERR} className='textfield' fullWidth id="Prenume" label="Prenume" variant="filled" onChange={handlePrenume}/>
          </Grid>
          <Grid item xs={6}>
            <TextField error={!numepetentERR} className='textfield' fullWidth id="Nume" label="Nume" variant="filled" onChange={handleNume}/>
          </Grid>
        </Grid>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField error={!emailpetentERR} className='textfield' fullWidth id="Email" label="E-mail" variant="filled" onChange={handleEmail} />
          </Grid>
          <Grid item xs={6}>
            <TextField error={!telefonpetentERR} className='textfield' fullWidth id="Telefon" label="Telefon" variant="filled" type="number" onChange={handleTelefon}/>
          </Grid>
        </Grid>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField error={!adresapetentERR} className='textfield' fullWidth id="Adresa" label="Adresa - Strada, Nr, (Bl,Et,Ap" variant="filled" onChange={handleAdresa}/>
          </Grid>
          <Grid item xs={6}>
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
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="OperatorEconomic" label="Denumire Operator Economic" variant="filled" onChange={handleDenumireOperator}/>
          </Grid>
          <Grid item xs={6}>
            <TextField className='textfield' fullWidth id="DataAchizitionarii" label="Data achizitionarii - zz/mm/aaaa" variant="filled" onChange={handleData}/>
          </Grid>
        </Grid>

        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="CUI" label="CUI" variant="filled" onChange={handleCui}/>
          </Grid>
          <Grid item xs={6}>
          <TextField fullWidth className='textfield'id="ModalitateaCumpararii" select label="Modalitatea Cumpararii"variant="filled" onChange={handleModalitate}
        >{modalitate.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
          </Grid> 
        </Grid>

        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="Adresa" label="Adresa Comerciant - Strada, Nr" variant="filled" onChange={handleAdresaComerciant}/>
          </Grid>
          <Grid item xs={6}>
          <TextField fullWidth className='textfield'id="judet" select label="Judet"variant="filled" onChange={handleJudetComerciant}
        >{jud.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
        </Grid>
        <div className='textfieldWidth'>
          <TextField fullWidth className='textfieldWidth'id="BirouReclamatii" select label="Birou reclamatii"variant="filled" onChange={handleBirou}
          >{birouri.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
            ))}
          </TextField>
          </div>

          <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="Detalii" label="Dovada adresarii operatorului economic" variant="filled" multiline onChange={handleDovada}/>
          </Grid>
          <Grid item xs={6}>
           <TextField fullWidth className='textfield'id="pretentiile " select label="Pretentiile dumneavoastra"variant="filled" onChange={handlepretentiidvs}
           >{pretentii.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
           </TextField>
          </Grid>
        </Grid>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Detalii cu privire la aspectele reclamate"
          className='textarea'
          onChange={handleDetalii}
        />
        <h1 className='text3'>Documente probatorii</h1>
        <Container maxWidth="lg" className='containerDocumente'>
          <Grid direction='row' container spacing={2} marginBottom='10px'>
            <Grid item xs={6} color="black">
            <h1 className='text4'>Factura / Bon Fiscal / Chitanta</h1>
            </Grid>
            <Grid item xs={6}>
            <FilePicker
                extensions={['pdf']}
                onChange={(FileObject)=>{ handlePDFpickerFac(FileObject)}}
              >
              <Button className="buttonIncarcare" fullWidth variant="contained" >Incarca</Button>
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
                  extensions={['pdf']}
                  onChange={(FileObject)=>{ handlePDFpickerCon(FileObject)}}
                >
              <Button className="buttonIncarcare" fullWidth variant="contained">Incarca</Button>
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
                    extensions={['pdf']}
                    onChange={(FileObject)=>{ handlePDFpickerGara(FileObject)}}
                  >
              <Button className="buttonIncarcare" fullWidth variant="contained">Incarca</Button>
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
                    extensions={['pdf']}
                    onChange={(FileObject)=>{ handlePDFpickerDov(FileObject)}}
                  >
              <Button className="buttonIncarcare" fullWidth variant="contained">Incarca</Button>
              </FilePicker>
            </Grid>
          </Grid>
          <p>{numeDovada}</p>
        </Container>
        <Button className="buttonIncarcare" fullWidth variant="contained" onClick={()=>{trimiteDate()} }>Trimite reclamatia</Button>
      </Container>
      </div>
    </div>
  );
  }

export default App
