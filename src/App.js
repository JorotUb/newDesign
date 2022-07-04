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
