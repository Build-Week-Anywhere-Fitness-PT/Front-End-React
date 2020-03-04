import React, { useState } from 'react';
import styled from 'styled-components';

function InstructorSignup () {

  const [AuthenticationStatus, setAuthenticationStatus] = useState(`none`);
    
    console.log(AuthenticationStatus);
    
    return (
        <form>
             <input type="text" placeholder="Instructor Code"/>
        </form>

    
      );
    }

export default InstructorSignup;
