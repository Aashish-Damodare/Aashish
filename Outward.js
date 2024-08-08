import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Button from "@mui/material/Button";

function Outward() {
  const [dateTime, setDateTime] = useState(new Date());


  const updateDateTime = () => {
    setDateTime(new Date());
  };


  useEffect(() => {
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId); 
  }, []);

  const formattedDateTime = dateTime.toLocaleString();

  return (
    <>
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <Link to="/User">
            <li>User</li>
          </Link>
          <Link to="/inward">
            <li>Inward</li>
          </Link>
          <Link to="/outward">
            <li>Outward</li>
          </Link>
          <Link to="/payment">
            <li>Payment</li>
          </Link>
          <li>Receipt</li>
          <li>Row Material Purpose</li>
          <li>Consumption</li>
          <li className="dropdown">
            Employee
            <ul className="dropdown-content">
              <li>Account</li>
              <li>Attendace</li>
              <li>Salery</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="Tabel-box">
        <h2 className="Hadding">Outward</h2>

        <div className="container">
          <p>Date : Time :- {formattedDateTime}</p>

          <div className="outward-rate">
            <TextField
              id="standard-basic"
              label="Rate"
              variant="standard"
              type="text"
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th rowSpan="2">S.No</th>
              <th rowSpan="2">Name</th>
              <th colSpan="2">Buffalo</th>
              <th colSpan="2">Cow</th>
              <th rowSpan="2" colSpan="2">Action</th>
            </tr>
            <tr>
              <th>Morning</th>
              <th>Evening</th>

              <th>Morning</th>
              <th>Evening</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td> <DeleteSweepIcon  /></td>
              <td><EditNoteIcon/></td>
            </tr>

           
            <tr>
              <td>2</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td></td>
             <td> <DeleteSweepIcon  /></td>
             <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                            <td> <DeleteSweepIcon  /></td>
                            <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                            <td> <DeleteSweepIcon  /></td>
                            <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                           <td> <DeleteSweepIcon  /></td>
                           <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                         <td> <DeleteSweepIcon  /></td>
                         <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                         <td> <DeleteSweepIcon  /></td>
                         <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                           <td> <DeleteSweepIcon  /></td>
                           <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Rajveer chohan</td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                           <td> <DeleteSweepIcon  /></td>
                           <td><EditNoteIcon/></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Rajveer chohan</td>
              <td> <TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
              <td><TextField id="standard-basic"  variant="standard" 
              sx={{ width: 100 }}
              InputProps={{
                disableUnderline: true, 
              }}/></td>
                            <td> <DeleteSweepIcon  /></td>
                            <td><EditNoteIcon/></td>
            </tr>
          </tbody>
        </table>

        <div className="outwad-save-btn">
        <Button variant="contained" color="success">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
export default Outward;
