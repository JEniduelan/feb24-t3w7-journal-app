import { createContext, useContext } from "react";


//  Create the context
//      SomeContextVariable = createContext(defaultValue);
const JournalEntriesContext = createContext([]);

// function SomeExample(){
//     const JournalData = useContext(JournalEntriesContext);
// }

// Create custom hooks to access the context data
export function useJournalEntriesData(){
    console.log("passing data around!");

    let currentJournalData = useContext(JournalEntriesContext);
    if (currentJournalData.length == 0){
        console.log("No entries to show!");
    }
}

// Create the context provider

export default function JournalEntriesProvider(props){
    let [journalEntries, serJournalEntries] = useState([]);
    return(
        <JournalEntriesContext.Provider value={journalEntries}>
            {props.children}
        </JournalEntriesContext.Provider>
    );
}