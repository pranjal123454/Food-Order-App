import React from 'react'
import dp from '../assets/DP.jpg'
import "./About.css";
const AboutUs = () => {
  return (
    <div className='Aboutus'>
      <table>
    <tr>
      <td><img className='dp' src={dp} alt="pic"/></td>
      <td>
        <h1 >Pranjal chaturvedi </h1>
        <p>
          <em>Software Developer Trainee At <strong>Virtual Employee Pvt Ltd</strong></em>
        </p>
        <p>
          currently studying at R.D. Engineerimng College Ghaziabad in computer science stream
          and  i am React Enthusiastic
        </p>
      </td>
    </tr>
  </table>
  {/* <hr size="3">
  </hr> */}
<h3>Education</h3>
<ul>
  <li>currently pursing final year of B.tech from A.K.T.U University</li>
  <li>passed 12th class from CBSE board</li>
  <li>passed matriculation from CBSE board</li>
  
</ul>
<table border="1">
  <thead>
    <tr>
      <th>dates</th>
      <th>work</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>2017</td>
      <td> Matriculation</td>
    </tr>
    <tr>
      <td>2019</td>
      <td> intermediate</td>
    </tr>
    <tr>
      <td>2022 feb to 2022 july </td>
      <td>  Trainee Engineer at Dalisoft Technologies Pvt Ltd</td>
    </tr>
    <tr>
      <td>2022 july to till now</td>
      <td> Software Developer Trainee  at Virtual Employee  Pvt Ltd</td>
    </tr>
  </tbody>
</table>
{/* <hr size="3">
  </hr> */}
<h3 >skills</h3>
<table>
  <thead >
    <tr>
      <th className='skills'> skills</th>
      <th className='ratings'>ratings</th>
    </tr>
    <tbody className='tbody'>
      <tr>
        <td> python</td>
        <td>🌟🌟🌟🌟</td>
      </tr>
      <tr>
        <td>c++ programing language</td>
        <td>🌟🌟🌟</td>
      </tr>
      <tr>
        <td>problem solving</td>
        <td>🌟🌟</td>
      </tr>
      <tr>
        <td>html</td>
        <td>🌟🌟🌟🌟🌟</td>
      </tr>
      <tr>
        <td>javascript</td>
        <td>🌟🌟 🌟</td>
      </tr>
      <tr>
        <td>node js</td>
        <td>🌟</td>
      </tr>
      <tr>
        <td>css</td>
        <td>🌟🌟🌟🌟</td>
      </tr>
      <tr>
        <td>c programming language</td>
        <td>🌟🌟🌟🌟</td>
      </tr>
      <tr>
        <td>React</td>
        <td>🌟🌟🌟🌟</td>
      </tr>
      <tr>
        <td>Git and Github</td>
        <td> 🌟🌟🌟	</td>
      </tr>
      <tr>
        <td>Git and Github</td>
        <td> 🌟🌟🌟	</td>
      </tr>
      <tr>
        <td>Git and Github</td>
        <td> 🌟🌟🌟	</td>
      </tr>
      <tr>
        <td>Git and Github</td>
        <td> 🌟🌟🌟	</td>
      </tr>
    </tbody>

  </thead>
</table>
{/* <hr size="3">

</hr> */}
  
    </div>
  )
}

export default AboutUs