import { React, useRef, useState, useEffect } from 'react'
import './PDFGenerator.css';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer'
import EducationFields from './EducationFields';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import { Certifications } from './Certifications';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Header from '../Components/HomePage/Header';


const PDFGenerator = () => {

  const [name, setName] = useState("");
  const [educationFields, setEducationFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const input = useRef(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [educationFields])


  // Certifcate Code
  function handleCertificateDelete(index) {
    const newData = [...certificate];
    newData.splice(index, 1);
    setCertificate(newData);
  }
  const handleCertificateChange = (index, field, value) => {
    const newCert = [...certificate];
    newCert[index][field] = value;
    setCertificate(newCert);
  }

  const handleCertificateField = () => {
    setCertificate([...certificate, {}]);
  }

  //------------ends----------

  //Project Code

  function handleProjectDelete(index) {
    const newData = [...projects]
    newData.splice(index, 1);
    setProjects(newData);
  }

  const handleProjectChange = (index, field, value) => {
    const newProject = [...projects]
    newProject[index][field] = value
    setProjects(newProject);
  }

  const handleProjectField = () => {
    setProjects([...projects, {}])
  }
  // ----------Project Code ends here-------------

  //Skills Code

  function handleSkillDelete(index) {
    const updatedData = [...skills];
    updatedData.splice(index, 1)
    setSkills(updatedData)
  }

  const handleSkillChange = (index, field, value) => {
    console.log(field)
    const newSkill = [...skills];
    newSkill[index][field] = value;
    setSkills(newSkill);
  };
  console.log(skills)
  const handleSkillFields = () => {
    setSkills([...skills, {}]);
  };

  //---------------------ends-------------------

  // Education Code starts here
  function handleEducationDelete(index) {
    const updatedData = [...educationFields];
    updatedData.splice(index, 1)
    setEducationFields(updatedData)
    setTimeout(scrollUp, 100)
  }

  const handleInputChange = (index, field, value) => {

    const newEducationFields = [...educationFields];
    newEducationFields[index][field] = value;
    setEducationFields(newEducationFields);

  };
  console.log(educationFields)
  const handleAddFields = () => {
    setEducationFields([...educationFields, {}]);
    setTimeout(scrollDown, 100);
  };

  //----------------ends--------------

  // Experience Code Starts Here

  function handleExperienceDelete(index) {
    const updatedData = [...experience];
    updatedData.splice(index, 1)
    setExperience(updatedData)
    setTimeout(scrollUp, 100)
  }

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const handleAddFieldsExperience = () => {
    setExperience([...experience, {}]);
    setTimeout(scrollDown, 100);
  };
  //---------------------ends---------------------



  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      padding: 20,
      fontFamily: 'Helvetica',
      // backgroundColor:'red',
    },

    contact: {
      fontSize: 12,
      margin: 5,
      fontFamily: 'Helvetica-BoldOblique',

    },

    table: {

      border: '1px solid black',
      width: '100%',
      fontSize: 12,
      paddingLeft: 4,
      fontWeight: 'bold',
      textAlign: 'center',


    },

    experience: {
      fontWeight: 100,
    },

    section: {
      marginBottom: 10,
      border: '1px solid black',
      padding: 10,
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',

      marginBottom: 5,
    },
    content: {
      fontSize: 12,
      marginBottom: 5,
    },

    rowData: {
      fontSize: '10px',

      color: 'black',

      width: 'auto',
      height: 'auto',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      whiteSpace: 'normal',

    },
    skills: {
      flexWrap: 'wrap',
    }

  });

  // Auto - Scrolling Functions
  const scrollDown = () => {
    if (input.current) {
      input.current.scrollTop += 200;
    }
  }

  const scrollUp = () => {
    if (input.current) {
      input.current.scrollDown += 200;
    }
  }
  //----------------ends-------------------

  //Auto Score type generator
  const handlescore = (index, data) => {
    if (data > 10 && data != null) {
      return "(%)";
    } else if (data < 10 && data != null) {
      return "(GPA)"
    }
  }
  //---------------ends-------------

  //PDF Preview function
  function PDFPreview() {
    if (preview === false) {
      setPreview(true);
    } else if (preview === true) {
      setPreview(false);
    }
  }

  //-------------ends---------------

  // Main Resume PDF Template
  const content = (
    <Document>
      <Page size="A4" style={styles.page}>
        {name.length > 0 && (
          <View >
            <Text style={{ textAlign: 'center', borderBottom: '2px solid black', fontFamily: 'Helvetica-Bold' }}>{name}</Text>
          </View>
        )}

        {phone.length > 0 && (
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '1px solid black' }}>
            <Text style={styles.contact}>{phone}</Text><Text style={styles.contact}>{email}</Text>
          </View>
        )}

        {summary.length > 0 && (
          <View>
            <Text className="section-heading" style={{ fontSize: '20px', marginTop: '5px', border: '3px solid black', paddingTop: '5px', textAlign: 'center', fontFamily: 'Helvetica-Bold' }}>SUMMARY</Text>
            <Text style={{ fontSize: '12px', paddingTop: '5px', paddingLeft: '5px', border: '1px solid black' }}>{summary}</Text>
          </View>)}

        {educationFields.length > 0 && (
          <View>
            <View style={{ border: '3px solid black', marginTop: '5px' }}>
              <Text className="section-heading" style={{ fontSize: '20px', textAlign: 'center', fontFamily: 'Helvetica-Bold' }}>EDUCATION</Text>
            </View>

            <View style={{ display: 'flex', fontFamily: 'Helvetica-Bold', marginTop: '5px', flexDirection: 'row', fontWeight: 'bold' }}>
              <View style={[styles.table, { flex: 0.1 }]}>
                <Text >Start Date</Text>
              </View>
              <View style={[styles.table, { flex: 0.1 }]}>
                <Text >End Date</Text>
              </View>
              <View style={[styles.table, { flex: 0.4 }]}>
                <Text >Institution</Text>
              </View>
              <View style={[styles.table, { flex: 0.2 }]}>
                <Text >Course Type</Text>
              </View>
              <View style={[styles.table, { flex: 0.2 }]}>
                <Text >Percentage/GPA </Text>
              </View>
            </View> </View>)

        }
        {educationFields.map((row, index) => (
          <View style={{ display: 'flex', flexDirection: 'row' }} key={index}>
            <View style={[styles.table, { flex: 0.1 }]}>
              <Text style={styles.rowData}>{row.start}</Text>
            </View>
            <View style={[styles.table, { flex: 0.1 }]}>
              <Text style={[styles.rowData]}>{row.end}</Text>
            </View>
            <View style={[styles.table, { flex: 0.4 }]}>
              <Text style={styles.rowData}>{row.institute}</Text>
            </View>
            <View style={[styles.table, { flex: 0.2 }]}>
              <Text style={styles.rowData}>{row.course}</Text>
            </View>
            <View style={[styles.table, { flex: 0.2 }]}>
              <Text style={styles.rowData}>{row.score} {handlescore(index, row.score)}</Text>
            </View>
          </View>
        ))}

        {experience.length > 0 && (
          <View>
            <View style={{ border: '3px solid black', marginTop: '5px' }}>
              <Text className="section-heading" style={{ fontSize: '20px', textAlign: 'center', fontFamily: 'Helvetica-Bold' }}>EXPERIENCE</Text>
            </View>
          </View>
        )}
        {experience.map((item, index) => (
          <View className="main" style={{ display: 'flex', paddingTop: '5px', paddingLeft: '3px', flexDirection: 'row', justifyContent: 'space-evenly', border: '1px solid black' }}>
            <Text style={{ fontSize: '10px', flex: 0.05 }}>{index + 1}.</Text>
            <View className="duration" style={{ display: 'flex', flex: 0.25, flexDirection: 'row', fontSize: '10px', paddingRight: '3px' }} >
              <Text>{item.start} - </Text>
              <Text>{item.end}</Text>
            </View>
            <View style={{ flex: 0.3, fontSize: '10px' }} className="company-info">
              <Text style={{ fontFamily: 'Helvetica-BoldOblique', fontSize: '12px' }}>{item.company}</Text>
              <Text>{item.position}</Text>
            </View>
            <View style={{ fontSize: '10px', flex: 0.4 }}>
              <Text>{item.description}</Text>
            </View>
          </View>
        ))}
        <View>
          {skills.length > 0 && (
            <View style={{ border: '3px solid black', marginTop: '5px' }}>
              <Text style={{ fontSize: '20px', textAlign: 'center', fontFamily: 'Helvetica-Bold' }}>SKILLS</Text>
            </View>)
          }
          <View style={[styles.skills, { borderLeft: '1px solid black', fontSize: '12px', borderRight: '1px solid black', display: 'flex', flexDirection: 'row' }]}>
            {skills.map((item, index) => (
              <Text style={[{ padding: '5px' }]}>• {item.skills}</Text>

            ))}
          </View>
        </View>
        {projects.length > 0 && (
          <View style={{ border: '3px solid black', marginTop: '5px' }}>
            <Text className="section-heading" style={{ fontSize: '20px', textAlign: 'center', fontFamily: 'Helvetica-Bold' }}>PROJECTS</Text>
          </View>
        )}

        {/* <View style={[styles.skills, { borderLeft: '1px solid black', fontSize: '12px', borderRight: '1px solid black', display: 'flex' }]}> */}
        {projects.map((item, index) => (
          <View style={{ display: 'flex', flexDirection: 'row', fontSize: '12px', borderBottom: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }}>
            <Text style={[{ padding: '5px' }]}>{index + 1}.</Text>
            <Text style={[styles.skills, { padding: '5px', flex: 0.35, borderRight: '1px solid black' }]}>{item.project_name}</Text>
            <Text style={[styles.skills, { padding: '5px', flex: 0.65 }]}>{item.project_description}</Text>
          </View>
        ))}
        {certificate.length > 0 && <View style={{ border: '3px solid black', marginTop: '5px' }}>
          <Text className="section-heading" style={{ fontSize: '20px', textAlign: 'center', fontFamily: 'Helvetica-Bold' }}>CERTIFICATIONS</Text>
        </View>}
        <View style={{ borderBottom: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black' }}>
          {certificate.map((item, index) => (
            <View style={{ display: 'flex', flexDirection: 'row', fontSize: '12px', margin: '5px', gap: '2px' }}>
              <Text>{index + 1}.</Text>
              <Text>{item.certificate}</Text>
            </View>
          ))}
        </View>

      </Page>
    </Document>
  );
  //--------------------------ends---------------------

  return (
    <div className='main-wrapper'>
      <div className='main-container'>
        <div className='input' ref={input}>

          <div className='personal-info'>
            <label>PERSONAL INFORMATION</label>
            <div style={{ display: 'flex', flex: 1 }}>
              <div className='lables' style={{ flex: 0.3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                <p className='titles'>Fullname : </p>
                <p className='titles'>Contact Number</p>
                <p className='titles'>Email Address</p>
              </div>
              <div className='input-box' style={{ flex: 0.6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                <input type="text" placeholder='Name' onChange={(event) => { setName(event.target.value) }} ></input>
                <input type='number' placeholder='Phone Number' onChange={(event) => setPhone(event.target.value)}></input>
                <input type='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
              </div>
            </div>
          </div>

          <div className='summary'>
            <label >PROFESSIONAL SUMMARY</label>
            <div className='p-summary'>
              <p className='titles' style={{ paddingLeft: '5px', paddingRight: '5px' }}>Summary</p>
              <textarea placeholder='Professional Summary' name="summary" onChange={(event) => setSummary(event.target.value)} rows="4" cols="50"></textarea>
            </div>
          </div>

          <div className='education'>

            {educationFields.map((_, index) => (
              <div className='edu-wrapper'>
                <div id='edu'>EDUCATION {index + 1}</div>
                {/* <button id="edu-delete-btn" onClick={()=>handleEducationDelete(index)}>Delete</button> */}
                <RemoveCircleRoundedIcon id="edu-delete-btn" onClick={() => handleEducationDelete(index)} />
                <EducationFields
                  key={index}
                  onChange={(event) =>
                    handleInputChange(index, event.target.name, event.target.value)

                  }

                />
              </div>
            ))}
            <div className='generator'>
              <button onClick={handleAddFields}><AddOutlinedIcon />Add Education</button>
            </div>
          </div>

          <div className='experience'>
            {experience.map((_, index) => (
              <div className='edu-wrapper'>
                <div id='edu'>WORK EXPERIENCE {index + 1}</div>
                <RemoveCircleRoundedIcon id="edu-delete-btn" onClick={handleExperienceDelete} />
                <br></br>
                <Experience
                  key={index}
                  onChange={(event) =>
                    handleExperienceChange(index, event.target.name, event.target.value)
                  }
                />
              </div>
            ))}
            <div className='generator'>
              <button onClick={handleAddFieldsExperience}><AddOutlinedIcon />Add Experience</button>
            </div>
          </div>


          <div className='skills_section'>
            {skills.length > 0 && <div style={{ marginBottom: '20px' }} id='edu'>SKILLS</div>}
            <div className='skill-render'>

              {skills.map((_, index) => (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <label>{index + 1}.</label>
                  <Skills key={index} onChange={(event) => handleSkillChange(index, event.target.name, event.target.value)} />
                  <DeleteForeverRoundedIcon onClick={() => handleSkillDelete(index)} id="skill-del" />
                </div>
              ))}
            </div>
            <div className='generator'>
              <button onClick={handleSkillFields}><AddOutlinedIcon />Add Skills</button>

            </div>
          </div>

          <div className='projects'>

            {projects.map((_, index) => (
              <div className='edu-wrapper'>
                <div id='edu'>PROJECTS {index + 1}</div>
                <RemoveCircleRoundedIcon id="edu-delete-btn" onClick={handleProjectDelete} />
                <Projects key={index} onChange={(event) => handleProjectChange(index, event.target.name, event.target.value)} />
              </div>
            ))}
            <div className='generator'>

              <button onClick={handleProjectField}><AddOutlinedIcon />Add Projects</button>
            </div>
          </div>

          <div className='certificate'>
            {certificate.length > 0 && <div style={{ marginBottom: '20px' }} id='edu'>CERTIFICATIONS</div>}
            {certificate.map((_, index) => (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label>{index + 1}.</label>
                  <Certifications key={index} onChange={(event) => handleCertificateChange(index, event.target.name, event.target.value)} />
                </div>
                <DeleteForeverRoundedIcon onClick={() => handleCertificateDelete(index)} id="skill-del" />
              </div>
            ))}
            <div className='generator'>
              <button onClick={handleCertificateField}><AddOutlinedIcon />Add Certifications</button>
            </div>
          </div>
        </div>

        <div className='pdf-viewer'>
          {preview ? (
            <div className='pdf-container'>
              <PDFViewer className='pdf'>
                {content}
              </PDFViewer>
            </div>
          ) : (
            <div className='tips'>
              <h1>TIPS </h1>
              <ol className='tips-content'>
                <div>1. Reread the job advertisement. Make a note of keywords and keyword phrases the company included in the job description and use these to highlight your skills in the resume. These skills should be relevant to the job you’re applying for.</div>
                <div>2. State your contact information. Put your name, address, email, and phone number in the top section of the resume.</div>
                <div>3. Write a concise personal statement. It should state who you are, why you are motivated to be in your profession, what your professional goals are, and any awards or recognition you won in school.</div>
                <div>4. List your soft and hard skills. Review which skills can help you do better at the job and include only those. For instance, you can highlight your communication, interpersonal, and conflict management skills for a customer service role. If it is a technical position, you can mention your mastery of coding and different programming languages. If you are good at writing, planning, and organizing, include that.</div>
                <div>5. Declare your willingness to learn new skills. Emerging technologies are changing the way companies do business, and that’s why employers are increasingly on the lookout for candidates who are willing to learn new skills and are fast learners. Highlighting these aspects can draw the attention of recruiters.</div>
                <div>6. Give work experience details. Even if you don’t have much professional experience, you can mention any projects done on your own or in collaboration with others. If you interned with any company or worked part-time at a fast-food restaurant or mall store, it can be useful to include that.</div>
                <div>7. Look at other resume samples online. Find the ones from your industry and compare them with your resume. Check if there is room for improvement and if you can add any items to make your resume stand out.</div>
              </ol>

            </div>
          )}
        </div>
      </div>
      <div className='pdf-generator-footer' >
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button class="prev-btn" onClick={PDFPreview} >{preview ? `Hide Preview` : `Resume Preview`}</button>
        </div>
        <div style={{ flex: 1, color: 'red' }}></div>
      </div>
    </div>
  )
}

export default PDFGenerator