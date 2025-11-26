import "./styles.css";
import html2pdf from "html2pdf.js";
import { useState } from "react";
import logo from "./logo.png";

const ClientsQuiz = () => {
  const [step, setStep] = useState(1);
  const [stepHistory, setStepHistory] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [results, setResults] = useState("");
  const [formValues, setFormValues] = useState({
    urgencyValue: "",
    knowledgeAreasValue: "",
    knowledgeLevelValue: "",
    formatValue: "",
    investmentValue: "",
    accessibilityValue: "",
    sizeValue: "",
  });

  const [stepPoints, setStepPoints] = useState({
    step2Points: 0,
    step3Points: 0,
    step4Points: 0,
    step5Points: 0,
    step6Points: 0,
    step7Points: 0,
    step8Points: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      const newValues = { ...prevValues, [name]: value };
      return newValues;
    });
  };

  const handleNext = () => {
    setStepHistory([...stepHistory, step]);
    setStep(step + 1);
  };

  const handleBack = () => {
    if (stepHistory.length > 0) {
      const previousStep = stepHistory[stepHistory.length - 1];
      setStepHistory(stepHistory.slice(0, -1));
      setStep(previousStep);
    } else {
      setStep(step - 1);
    }
  };

  const evaluateConditions = () => {
    const {
      urgencyValue,
      knowledgeAreasValue,
      knowledgeLevelValue,
      formatValue,
      investmentValue,
      accessibilityValue,
      sizeValue,
    } = formValues;

    if (urgencyValue === "a") {
      stepPoints.step2Points = 5;
    } else if (urgencyValue === "b") {
      stepPoints.step2Points = 3;
    } else if (urgencyValue === "c") {
      stepPoints.step2Points = 1;
    }

    if (knowledgeAreasValue === "a") {
      stepPoints.step3Points = 5;
    } else if (knowledgeAreasValue === "b") {
      stepPoints.step3Points = 4;
    } else if (knowledgeAreasValue === "c") {
      stepPoints.step3Points = 3;
    } else if (knowledgeAreasValue === "d") {
      stepPoints.step3Points = 2;
    } else if (knowledgeAreasValue === "e") {
      stepPoints.step3Points = 1;
    }

    if (knowledgeLevelValue === "a") {
      stepPoints.step4Points = 5;
    } else if (knowledgeLevelValue === "b") {
      stepPoints.step4Points = 3;
    } else if (knowledgeLevelValue === "c") {
      stepPoints.step4Points = 1;
    }

    if (formatValue === "a") {
      stepPoints.step5Points = 5;
    } else if (formatValue === "b") {
      stepPoints.step5Points = 4;
    } else if (formatValue === "c") {
      stepPoints.step5Points = 3;
    } else if (formatValue === "d") {
      stepPoints.step5Points = 2;
    }

    if (investmentValue === "a") {
      stepPoints.step6Points = 5;
    } else if (investmentValue === "b") {
      stepPoints.step6Points = 3;
    } else if (investmentValue === "c") {
      stepPoints.step6Points = 1;
    }

    if (accessibilityValue === "a") {
      stepPoints.step7Points = 5;
    } else if (accessibilityValue === "b") {
      stepPoints.step7Points = 3;
    } else if (accessibilityValue === "c") {
      stepPoints.step7Points = 1;
    }

    if (sizeValue === "a") {
      stepPoints.step8Points = 5;
    } else if (sizeValue === "b") {
      stepPoints.step8Points = 3;
    } else if (sizeValue === "c") {
      stepPoints.step8Points = 1;
    }
  };

  const addPoints = () => {
    let stepTotalPoints =
      stepPoints.step2Points +
      stepPoints.step3Points +
      stepPoints.step4Points +
      stepPoints.step5Points +
      stepPoints.step6Points +
      stepPoints.step7Points +
      stepPoints.step8Points;
    return stepTotalPoints;
  };

  const calculateResults = () => {
    evaluateConditions();
    const stepTotalPoints = addPoints();

    if (stepTotalPoints >= 27) {
      setResults([
        {
          urgency:
            "Alta. Su empresa está en un momento crítico de transformación o expansión, y la actualización de los recursos educativos es esencial para apoyar el crecimiento de su equipo.",
          profile: {
            type: "Empresas innovadoras, en expansión, o que operan en sectores tecnológicos, financieros o de consultoría.",
            objectives:
              "Impulsar el liderazgo, fortalecer la estrategia organizacional y adoptar nuevas tecnologías rápidamente.",
          },
          recommendation:
            "Su empresa debe priorizar libros y materiales avanzados que fortalezcan la formación de liderazgo, la gestión estratégica y el dominio de tecnologías emergentes. Los recursos deben estar alineados con sus objetivos de innovación y competitividad.",
          books: [
            {
              title:
                "Liderazgo Disruptivo: Cómo Gestionar el Cambio en la Era Digital",
              author: "Ana García",
            },
            {
              title: "Blockchain: Transformando el Futuro de los Negocios",
              author: "Pedro Sánchez",
            },
            {
              title: "Innovación Abierta en la Empresa",
              author: "Luis Rodríguez",
            },
          ],
          format:
            "Libros de alta calidad, tanto físicos como digitales (para facilitar el acceso remoto), especialmente en temas de tecnología y gestión estratégica. También se recomienda integrar plataformas digitales que complementen el aprendizaje.",
          message:
            "Su empresa se encuentra en una fase de crecimiento acelerado o transformación digital. Es crucial contar con recursos educativos actualizados que puedan mejorar la toma de decisiones estratégicas, desarrollar líderes efectivos y mantenerse a la vanguardia en el uso de nuevas tecnologías.",
        },
      ]);
    }

    if (stepTotalPoints >= 18 && stepTotalPoints <= 26) {
      setResults([
        {
          urgency:
            "Moderado.Su empresa está avanzando en la consolidación de sus procesos internos y ve la actualización educativa como una necesidad para continuar con su desarrollo.",
          profile: {
            type: "Empresas medianas en sectores como consultoría, manufactura avanzada, educación corporativa, o servicios profesionales.",
            objectives:
              "Mejorar las capacidades del equipo y facilitar la adopción de nuevos enfoques estratégicos.",
          },
          recommendation:
            "Es recomendable que su empresa invierta en libros y recursos prácticos sobre gestión empresarial, desarrollo de equipos y estrategias de innovación. Los temas deben alinearse con la necesidad de mejorar la eficiencia organizacional y potenciar el talento interno. ",
          books: [
            { title: "Gestión Ágil para Líderes", author: "Clara Pérez" },
            {
              title: "La Cultura Organizacional como Ventaja Competitiva",
              author: "Raúl López",
            },
            {
              title: "Transformación Digital en Empresas Familiares",
              author: "María Rodríguez",
            },
          ],
          format:
            "Una combinación de e-books y libros impresos, dependiendo de las preferencias de los empleados, con un enfoque en manuales prácticos y herramientas para la mejora continua.",
          message:
            "Su empresa está en una fase de madurez, con un enfoque en mejorar la productividad y la capacitación continua de su equipo. La integración de recursos educativos prácticos será clave para mantener el ritmo de crecimiento y competitividad.",
        },
      ]);
    }

    if (stepTotalPoints >= 9 && stepTotalPoints <= 17) {
      setResults([
        {
          urgency:
            "Baja. La actualización de la biblioteca de recursos es más una prioridad futura o secundaria dentro de sus objetivos de formación.",
          profile: {
            type: "Empresas en sectores tradicionales o en fases de consolidación. Pueden ser pequeñas empresas familiares, consultoras locales, o empresas en sectores como venta al por mayor, logística, o educación básica.",
            objectives:
              "Optimizar recursos y ofrecer formación básica a los empleados para mejorar la productividad y la organización interna.",
          },
          recommendation:
            "Su empresa debería enfocarse en libros introductorios y materiales de capacitación básica. Los recursos deben ayudar a fortalecer las competencias fundamentales, mejorar la productividad diaria y desarrollar habilidades de gestión básica.",
          books: [
            {
              title: "Gestión Eficiente del Tiempo para Equipos Pequeños",
              author: "Carmen Ortega",
            },
            {
              title:
                "Introducción a la Gestión Empresarial: Estrategias para PYMES",
              author: "Fernando Martínez",
            },
            {
              title: "Bienestar en el Trabajo: Estrategias para el Éxito",
              author: "Laura Ramírez",
            },
          ],
          format:
            "Libros físicos que puedan ser distribuidos entre los empleados, además de materiales digitales accesibles desde cualquier dispositivo para aquellos empleados que prefieren aprender de forma más flexible.",
          message:
            "Aunque no es una prioridad urgente, la actualización de la biblioteca de recursos será esencial para apoyar el desarrollo de sus empleados en habilidades básicas de gestión y productividad. Invertir en libros introductorios y de fácil acceso permitirá a su equipo mejorar en su día a día sin necesidad de grandes recursos.",
        },
      ]);
    }

    if (stepTotalPoints <= 8) {
      setResults([
        {
          urgency:
            "Muy baja. La mejora de los recursos educativos no parece ser una necesidad crítica para su empresa en el corto plazo.",
          profile: {
            type: "Empresas con recursos limitados, en sectores como comercio local, pequeñas empresas familiares o startups con equipos reducidos.",
            objectives:
              "Apuntar a la mejora de procesos básicos, o bien mantener la productividad sin grandes inversiones en formación.",
          },
          recommendation:
            "En este caso, es recomendable comenzar con libros breves, guías rápidas o artículos digitales sobre temas como productividad personal, gestión básica o desarrollo de habilidades profesionales.",
          books: [
            {
              title: "Cómo Mejorar tu Productividad en 7 Días",
              author: "Ricardo González",
            },
            {
              title: "Gestión del Estrés para Profesionales",
              author: "Andrea Fernández",
            },
            {
              title: "Liderazgo para Equipos Pequeños",
              author: "Samuel López",
            },
          ],
          format:
            "E-books y resúmenes digitales, los cuales son fáciles de distribuir y actualizar. También se pueden usar guías o manuales de bolsillo para empleados que necesiten materiales prácticos.",
          message:
            "No es urgente, pero la actualización de recursos puede ser una inversión futura para mejorar la productividad y satisfacción de los empleados. Considerando su capacidad actual, podría comenzar con recursos accesibles y asequibles, sin realizar grandes inversiones.",
        },
      ]);
    }
  };

  const isStepCompleted = () => {
    switch (step) {
      case 1:
        return companyName !== "";
      case 2:
        return formValues.urgencyValue !== "";
      case 3:
        return formValues.knowledgeAreasValue !== "";
      case 4:
        return formValues.knowledgeLevelValue !== "";
      case 5:
        return formValues.formatValue !== "";
      case 6:
        return formValues.investmentValue !== "";
      case 7:
        return formValues.accessibilityValue !== "";
      case 8:
        return formValues.sizeValue !== "";
      default:
        return false;
    }
  };

  const handleReset = () => {
    setStep(1);
    setCompanyName("");
    setFormValues({
      urgencyValue: "",
      knowledgeAreasValue: "",
      knowledgeLevelValue: "",
      formatValue: "",
      investmentValue: "",
      accessibilityValue: "",
      sizeValue: "",
    });
    setStepPoints({
      step2Points: 0,
      step3Points: 0,
      step4Points: 0,
      step5Points: 0,
      step6Points: 0,
      step7Points: 0,
      step8Points: 0,
    });
  };

  const downloadPDF = () => {
    const tableElement = document.querySelector("#results-page");

    let opt = {
      margin: 0.2,
      filename: "tabla_resultados.pdf",
      pagebreak: { mode: "css" },
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(tableElement).save();
  };

  return (
    <div className="quiz-container quiz-item">
      <div className="container">
        {step !== 1 && step !== 9 && (
          <div className="logo-header">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        )}

        {step === 1 && (
          <div className="step1 step-container">
            <div className="logo-header">
              <img src={logo} alt="Logo" className="logo" />
            </div>

            <h3>Examen de Diagnóstico para Empresas</h3>

            {
              <>
                <div>
                  <label>
                    Nombre de la empresa:
                    <input
                      type="text"
                      name="companyName"
                      value={formValues.companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      min="0" // Restricción para navegadores que soportan HTML5
                    />
                  </label>
                </div>
              </>
            }

            <div className="buttons">
              <button onClick={handleNext} disabled={!isStepCompleted()}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step2 step-container ">
            <h3>
              ¿Qué tan urgente considera su empresa mejorar o ampliar su
              biblioteca de recursos educativos (libros, e-books, manuales,
              etc.)?
            </h3>

            <div className="question-options">
              <label>
                <input
                  type="radio"
                  name="urgencyValue"
                  value="a"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.urgencyValue === "a"}
                />
                Muy urgente, necesitamos una actualización inmediata para
                nuestros empleados.
              </label>

              <label>
                <input
                  type="radio"
                  name="urgencyValue"
                  value="b"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.urgencyValue === "b"}
                />
                Moderadamente urgente, pero tenemos tiempo para planificar la
                adquisición.
              </label>

              <label>
                <input
                  type="radio"
                  name="urgencyValue"
                  value="c"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.urgencyValue === "c"}
                />
                No es urgente, solo estamos considerando agregar algunos
                recursos.
              </label>
            </div>

            <div className="buttons">
              <button onClick={handleBack}>Regresar</button>

              <button onClick={handleNext} disabled={!isStepCompleted()}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step3 step-container ">
            <h3>
              ¿Qué áreas de conocimiento considera su empresa como prioritarias
              para mejorar la biblioteca de recursos?
            </h3>

            <div className="question-options">
              <label>
                <input
                  type="radio"
                  name="knowledgeAreasValue"
                  value="a"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeAreasValue === "a"}
                />
                Desarrollo profesional y habilidades de liderazgo.
              </label>

              <label>
                <input
                  type="radio"
                  name="knowledgeAreasValue"
                  value="b"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeAreasValue === "b"}
                />
                Tecnologías emergentes (IA, Big Data, Blockchain, etc.).
              </label>

              <label>
                <input
                  type="radio"
                  name="knowledgeAreasValue"
                  value="c"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeAreasValue === "c"}
                />
                Gestión y estrategia empresarial.
              </label>

              <label>
                <input
                  type="radio"
                  name="knowledgeAreasValue"
                  value="d"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeAreasValue === "d"}
                />
                Cultura organizacional y bienestar laboral.
              </label>

              <label>
                <input
                  type="radio"
                  name="knowledgeAreasValue"
                  value="e"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeAreasValue === "e"}
                />
                Literatura general o de entretenimiento.
              </label>
            </div>

            <div className="buttons">
              <button onClick={handleBack}>Regresar</button>

              <button onClick={handleNext} disabled={!isStepCompleted()}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="step4 step-container ">
            <h3>
              ¿Cuál es el nivel de conocimiento de su equipo en las áreas
              prioritarias que su empresa desea fortalecer?
            </h3>

            <div className="question-options">
              <label>
                <input
                  type="radio"
                  name="knowledgeLevelValue"
                  value="a"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeLevelValue === "a"}
                />
                Nuestro equipo ya tiene un buen dominio del tema y buscamos
                material avanzado.
              </label>

              <label>
                <input
                  type="radio"
                  name="knowledgeLevelValue"
                  value="b"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeLevelValue === "b"}
                />
                Tenemos conocimiento básico/intermedio, necesitamos recursos
                para fortalecer nuestras competencias.
              </label>

              <label>
                <input
                  type="radio"
                  name="knowledgeLevelValue"
                  value="c"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.knowledgeLevelValue === "c"}
                />
                Nuestro equipo está empezando en estos temas y necesita material
                introductorio.
              </label>
            </div>

            <div className="buttons">
              <button onClick={handleBack}>Regresar</button>

              <button onClick={handleNext} disabled={!isStepCompleted()}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="step5 step-container ">
            <h3>
              ¿Qué tipo de formato prefiere su empresa para los recursos
              educativos (libros, manuales, guías)?{" "}
            </h3>

            <div className="question-options">
              <label>
                <input
                  type="radio"
                  name="formatValue"
                  value="a"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.formatValue === "a"}
                />
                Prefiero libros completos con contenido teórico y práctico.
              </label>

              <label>
                <input
                  type="radio"
                  name="formatValue"
                  value="b"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.formatValue === "b"}
                />
                Manuales y guías rápidas con ejemplos prácticos.
              </label>

              <label>
                <input
                  type="radio"
                  name="formatValue"
                  value="c"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.formatValue === "c"}
                />
                Resúmenes, artículos breves o recursos digitales (e-books).
              </label>

              <label>
                <input
                  type="radio"
                  name="formatValue"
                  value="d"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.formatValue === "d"}
                />
                Material visual como infografías o videos educativos.
              </label>
            </div>

            <div className="buttons">
              <button onClick={handleBack}>Regresar</button>

              <button onClick={handleNext} disabled={!isStepCompleted()}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="step6 step-container ">
            <h3>
              ¿Está su empresa dispuesta a invertir en recursos educativos de
              autores o editoriales reconocidas?
            </h3>

            <div className="question-options">
              <label>
                <input
                  type="radio"
                  name="investmentValue"
                  value="a"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.investmentValue === "a"}
                />
                Sí, priorizamos recursos de alta calidad y de autores
                prestigiosos.
              </label>

              <label>
                <input
                  type="radio"
                  name="investmentValue"
                  value="b"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.investmentValue === "b"}
                />
                Dependemos del costo, pero estamos dispuestos a invertir si el
                material es relevante.
              </label>

              <label>
                <input
                  type="radio"
                  name="investmentValue"
                  value="c"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.investmentValue === "c"}
                />
                Buscamos opciones más económicas, aunque de calidad aceptable.
              </label>
            </div>

            <div className="buttons">
              <button onClick={handleBack}>Regresar</button>

              <button onClick={handleNext} disabled={!isStepCompleted()}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="step7 step-container ">
            <h3>
              ¿Qué tan importante es para su empresa que los recursos educativos
              sean accesibles de forma digital (e-books, plataformas en línea)?
            </h3>

            <div className="question-options">
              <label>
                <input
                  type="radio"
                  name="accessibilityValue"
                  value="a"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.accessibilityValue === "a"}
                />
                Muy importante, preferimos la flexibilidad del acceso digital.
              </label>

              <label>
                <input
                  type="radio"
                  name="accessibilityValue"
                  value="b"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.accessibilityValue === "b"}
                />
                Es importante, pero no es esencial. Podemos combinar formatos
                físicos y digitales.
              </label>

              <label>
                <input
                  type="radio"
                  name="accessibilityValue"
                  value="c"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.accessibilityValue === "c"}
                />
                No es necesario, preferimos los recursos impresos.
              </label>
            </div>

            <div className="buttons">
              <button onClick={handleBack}>Regresar</button>

              <button onClick={handleNext} disabled={!isStepCompleted()}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="step8 step-container ">
            <h3>
              ¿Qué tamaño tiene actualmente la biblioteca de recursos educativos
              de su empresa?
            </h3>

            <div className="question-options">
              <label>
                <input
                  type="radio"
                  name="sizeValue"
                  value="a"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.sizeValue === "a"}
                />
                Amplia, tenemos una biblioteca extensa con muchos títulos y
                recursos disponibles.
              </label>

              <label>
                <input
                  type="radio"
                  name="sizeValue"
                  value="b"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.sizeValue === "b"}
                />
                Moderada, tenemos algunos libros y recursos clave, pero
                necesitamos más variedad.
              </label>

              <label>
                <input
                  type="radio"
                  name="sizeValue"
                  value="c"
                  onChange={(e) => {
                    handleInputChange(e);
                    evaluateConditions();
                  }}
                  checked={formValues.sizeValue === "c"}
                />
                Limitada, tenemos pocos recursos y necesitamos una actualización
                completa.
              </label>
            </div>

            <div className="buttons">
              <button onClick={handleBack}>Regresar</button>

              <button
                onClick={() => {
                  handleNext();
                  calculateResults();
                }}
                disabled={!isStepCompleted()}
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 9 && (
          <div className="step9 step-container">
            <div className="results-page" id="results-page">
              <div className="results-header">
                <div className="logo-header">
                  <img src={logo} alt="Logo" className="logo" />
                </div>

                <h3>Reporte para {companyName}</h3>
              </div>

              <div className="results-left">
                <div className="urgency-level">
                  <h4>Nivel de urgencia</h4>
                  <div>
                    {results.map((res) => (
                      <p>{res.urgency}</p>
                    ))}
                  </div>
                </div>

                <div className="company-profile">
                  <h4>Perfil de empresa</h4>
                  <h5>Tipo de empresa</h5>
                  <div>
                    {results.map((res) => (
                      <p>{res.profile.type}</p>
                    ))}
                  </div>

                  <h5>Objetivos clave</h5>
                  <div>
                    {results.map((res) => (
                      <p>{res.profile.objectives}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="results-right">
                <div className="recommendation">
                  <h4>Recomendación</h4>
                  <div>
                    {results.map((res) => (
                      <p>{res.recommendation}</p>
                    ))}
                  </div>

                  <h5>Ejemplos de libros recomendados:</h5>
                  <div>
                    <ul>
                      {results.map((res) =>
                        res.books.map((info) => (
                          <li>
                            <span className="italic">"{info.title}"</span> por{" "}
                            {info.author}
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>

                <div className="recommended-format">
                  <h4>Formato recomendado</h4>
                  <div>
                    {results.map((res) => (
                      <p>{res.format}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="message">
                <em>
                  {results.map((res) => (
                    <p>{res.message}</p>
                  ))}
                </em>
              </div>
            </div>

            <div className="buttons">
              <button
                onClick={() => {
                  downloadPDF();
                }}
                onKeyPress={() => {
                  downloadPDF();
                }}
                className="download-button"
              >
                Descargar PDF
              </button>

              <div className="buttons">
                <button
                  className="red reset-button"
                  onClick={() => {
                    handleReset();
                  }}
                  onKeyPress={() => {
                    handleReset();
                  }}
                >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientsQuiz;
