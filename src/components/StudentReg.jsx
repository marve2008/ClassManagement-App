import { useContext, useEffect } from "react";
import myPix from "../assets/images/marv1.jpg";
import { Formik, Form, Field } from "formik";
import { ClassContext } from "../helpers/Context";
import * as Yup from "yup";

const Main = () => {
  const { myData, setMyData } = useContext(ClassContext);
 


  const initialValues = {
    firstName: "",
    surName: "",
    email: "",
    phoneNumber: "",
    state: "",
    gender: "",
    program: '',
    price: '',
    start_date: '',
    end_date: '',
  };

  const validate = Yup.object().shape({
    firstName: Yup.string().required("FirstName name Required"),
    surName: Yup.string().required("Surname Required"),
    email: Yup.string().required("Email Required"),
    phoneNumber: Yup.number().required("Phonenumber Required"),
    state: Yup.string().required("State of Origin Required"),
    // gender: '',
    // program: Yup.string().required("program required"),
    // price: Yup.string().required("price required"),
    start_date: Yup.string().required("Start date reqired"),
    end_date: Yup.string().required("End date required"),
  });
  useEffect(() => {
    const savedData = localStorage.getItem('MARV');
    if (savedData) {
      setMyData(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (values, action) => {
    const updatedData = [...myData, values];
    localStorage.setItem('MARV', JSON.stringify(updatedData));
    setMyData(updatedData);
    action.resetForm();
    toast.success('Registration Successful', {
      position: 'top-left',
    });
  };
  return (
    <>
      <div className="reg-container">
        <div>
          <img src={myPix} alt="" className="vicsoft" />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form method="post" id="studentDetailForm">
              <h1>Create new student</h1>
              <div className="contain">
                <div>
                  <label htmlFor="firstName ">FirstName</label>
                  <br />
                  <Field type="text" name="firstName" />
                  {errors.firstName && touched.firstName ? (
                   <div>{errors.firstName}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Surname</label>
                  <br />
                  <Field type="text" name="surName" />
                  {errors.surName && touched.surName ? (
                    <div>{errors.surName}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <br />
                  <Field type="email" name="email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Phonenumber</label> <br />
                  <Field type="number" name="phoneNumber" />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.phoneNumber}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">State of Origin</label>
                  <br />
                  <Field name="state" type="text" />
                  {errors.state && touched.state ? (
                    <div>{errors.state}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="">Gender</label>
                  <br />
                  <input type="radio" name="gender" id="male" />
                  Male
                  <input type="radio" name="gender" id="female" />
                  Female
                  {/* {errors.gender && touched.gender ? (
                    <div>{errors.gender}</div>
                  ) : null} */}
                </div>

                <div>
                  {/* <!-- <label for="">program</label> --> */}
                  <label>program</label>
                  <br />
                  <select name="program" id="program">
                    <option value="">select program</option>
                    <option value="ICT Fundamentals">ICT Fundamentals</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Frontend Web Development">
                      Frontend Web Development
                    </option>
                    <option value="Backend Web Development">
                      Backend Web Development
                    </option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                  {/* {errors.program && touched.program ? (
                    <div>{errors.program}</div>
                  ) : null} */}
                </div>
                <div>
                  <select name="price" id="price">
                    <option value="">Amount</option>
                    <option value="ICT Fundamentals(40,000)">
                      ICT Fundamentals(40,000)
                    </option>
                    <option value="Web Design(45,000)">
                      Web Design(45,000)
                    </option>
                    <option value="Web Development(100,000)">
                      Web Development(100,000)
                    </option>
                    <option value="Frontend Web Development(150,000)">
                      Frontend Web Development(150,000)
                    </option>
                    <option value="Backend Web Development(120,000)">
                      Backend Web Development(120,000)
                    </option>
                    <option value="Mobile App Development(120,000)">
                      Mobile App Development(120,000)
                    </option>
                    <option value="Graphics Design(60,000)">
                      Graphics Design(60,000)
                    </option>
                    <option value="UI/UX Design(70,000)">
                      UI/UX Design(70,000)
                    </option>
                    <option value="Digital Marketing(50,000)">
                      Digital Marketing(50,000)
                    </option>
                  </select>
                  {/* {errors.price && touched.price ? (
                    <div>{errors.price}</div>
                  ) : null} */}
                </div>
                <div>
                  {/* <!-- <label for="">start date</label> --> */}
                  <p>Start Date</p>
                  <Field type="date" name="start_date" id="start_date" />
                  {errors.start_date && touched.start_date ? (
                    <div>{errors.start_date}</div>
                  ) : null}
                </div>
                <div>
                  {/* <!-- <label for="">end date</label> --> */}
                  <p>End Date</p>
                  <Field type="date" name="end_date" id="end_date" />
                  {errors.end_date && touched.end_date ? (
                    <div>{errors.end_date}</div>
                  ) : null}
                </div>
                <div>
                  <button className="reg-btn" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Main;
