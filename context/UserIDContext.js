import React, { createContext, useContext, useState } from 'react';

 const UserIDContext=createContext();

function useUserID(){
    return useContext(UserIDContext);
}

export {UserIDContext,useUserID};