import React from 'react'


export const Second = () => {
    
  return (
    <div>
        
       <div className="form-group">
                <label htmlFor="">program</label>
                <p>program</p>
      <select name="" id="program">
                  <option value="" >
                    select program
                  </option>
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
              </div>
              <div className="form-group">
                <select name="" id="price">
                  <option value="" >
                    Amount
                  </option>
                  <option value="ICT Fundamentals(40,000)">
                    ICT Fundamentals(40,000)
                  </option>
                  <option value="Web Design(45,000)">Web Design(45,000)</option>
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
              </div>
              <div className="form-group">
                <label htmlFor="">start date</label>
                <p>Start Date</p>
                <input type="date" name="start_date" id="start_date" />
                {errors.start_date && touched.start_date ? (
                  <div>{errors.start_date}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">end date</label>
                <p>End Date</p>
                <input type="date" name="end_date" id="end_date" />
                {errors.end_date && touched.end_date ? (
                  <div>{errors.end_date}</div>
                ) : null}
              </div>

              <button className="reg-btn" type="submit">
                Register
              </button>
            
    </div>
  )
}
