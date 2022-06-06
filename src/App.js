import background from './assets/videoBackGround.mp4';
import banner from './assets/banner1.jpg';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './App.css';

const judete = require('./judete.json')
let jud = []
for(var k in judete) {
  if(judete[k] instanceof Object) {
      jud.push(judete[k].nume)
  }
}
let modalitate = ["Online", "Fizic"]
let pretentii = ["Inlocuire", "Returnare", "Reparare", "Reziliere", "Control"]

function App() {
    this.state = {
      numePetent: '',numePetentValid: true,
      prenumePetent: '',prenumePetentValid: true,
      emailPetent: '',emailPetentValid: true,
      telefonPetent: '',telefonPetentValid: true,
      adresaPetent: '', adresaPetentValid: true,

      adresaComerciant: '',adresaComerciantValid: true,

      operator:'',operatorValid: true,
      cuiComerciant:'',cuiComerciantValid: true,
      dataAchizitionarii:'',dataAchizitionariiValid: true,
      modalitateCumparare:'',
      birouReclamatii:'',birouReclamatiiValid: true,
      produsReclamat:'',produsReclamatValid: true,
      subcategorieProdus:'',subcategorieProdusValid: true,
      pretentiiPetent:'',pretentiiPetentValid: true,
      dovadaAdresarii:'',dovadaAdresariiValid: true,
      detaliiReclamatie:'',detaliiReclamatieValid: true,
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
            <TextField className='textfield' fullWidth id="Prenume" label="Prenume" variant="filled" />
          </Grid>
          <Grid item xs={6}>
            <TextField className='textfield' fullWidth id="Nume" label="Nume" variant="filled" />
          </Grid>
        </Grid>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="Email" label="E-mail" variant="filled" />
          </Grid>
          <Grid item xs={6}>
            <TextField className='textfield' fullWidth id="Telefon" label="Telefon" variant="filled" type="number"/>
          </Grid>
        </Grid>
        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="Adresa" label="Adresa - Strada, Nr, (Bl,Et,Ap" variant="filled" />
          </Grid>
          <Grid item xs={6}>
          <TextField fullWidth className='textfield'id="judet" select label="Judet"variant="filled"
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
            <TextField className='textfield' fullWidth id="OperatorEconomic" label="Denumire Operator Economic" variant="filled" />
          </Grid>
          <Grid item xs={6}>
            <TextField className='textfield' fullWidth id="DataAchizitionarii" label="Data achizitionarii - zz/mm/aaaa" variant="filled" />
          </Grid>
        </Grid>

        <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="CUI" label="CUI" variant="filled" />
          </Grid>
          <Grid item xs={6}>
          <TextField fullWidth className='textfield'id="ModalitateaCumpararii" select label="Modalitatea Cumpararii"variant="filled"
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
            <TextField className='textfield' fullWidth id="Adresa" label="Adresa Comerciant - Strada, Nr" variant="filled" />
          </Grid>
          <Grid item xs={6}>
          <TextField fullWidth className='textfield'id="judet" select label="Judet"variant="filled"
        >{jud.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
        </Grid>
        <div className='textfieldWidth'>
          <TextField fullWidth className='textfieldWidth'id="BirouReclamatii" select label="Birou reclamatii"variant="filled"
          >{jud.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
            ))}
          </TextField>
          </div>

          <Grid direction='row' container spacing={2} marginBottom='10px'>
          <Grid item xs={6} color="black">
            <TextField className='textfield' fullWidth id="Detalii" label="Dovada adresarii operatorului economic" variant="filled" multiline/>
          </Grid>
          <Grid item xs={6}>
           <TextField fullWidth className='textfield'id="pretentiile " select label="Pretentiile dumneavoastra"variant="filled"
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
        />
        <h1 className='text3'>Documente probatorii</h1>
        <Container maxWidth="lg" className='containerDocumente'>
          <Grid direction='row' container spacing={2} marginBottom='10px'>
            <Grid item xs={6} color="black">
            <h1 className='text4'>Factura / Bon Fiscal / Chitanta</h1>
            </Grid>
            <Grid item xs={6}>
              <Button className="buttonIncarcare" fullWidth variant="contained">Incarca</Button>
            </Grid>
          </Grid>

          <Grid direction='row' container spacing={2} marginBottom='10px'>
            <Grid item xs={6} color="black">
            <h1 className='text4'>Contract</h1>
            </Grid>
            <Grid item xs={6}>
              <Button className="buttonIncarcare" fullWidth variant="contained">Incarca</Button>
            </Grid>
          </Grid>

          <Grid direction='row' container spacing={2} marginBottom='10px'>
            <Grid item xs={6} color="black">
            <h1 className='text4'>Certificat de garantie</h1>
            </Grid>
            <Grid item xs={6}>
              <Button className="buttonIncarcare" fullWidth variant="contained">Incarca</Button>
            </Grid>
          </Grid>

          <Grid direction='row' container spacing={2} marginBottom='10px'>
            <Grid item xs={6} color="black">
            <h1 className='text4'>Dovada adresarii operatorului</h1>
            </Grid>
            <Grid item xs={6}>
              <Button className="buttonIncarcare" fullWidth variant="contained">Incarca</Button>
            </Grid>
          </Grid>
        </Container>
        <Button className="buttonIncarcare" fullWidth variant="contained">Trimite reclamatia</Button>
      </Container>
      </div>
    </div>
  );
}

export default App;
