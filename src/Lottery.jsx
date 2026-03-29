import {useState} from 'react'
import './Lottery.css'
import { genTicket, winTicket  } from './helper'
 
function Lottery(){
    
    let [ticket,setticket]=useState(genTicket(3))
    let isWinning = winTicket(ticket);
    
    return(
        <div style={{
            fontFamily: "Arial, sans-serif",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "2.5rem",
            border: "1px solid #e0e0e0",
            borderRadius: "16px",
            maxWidth: "400px",
            margin: "3rem auto",
            backgroundColor: isWinning ? "#e8f5e9" : "#ffffff",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: "background-color 0.5s ease",
             zIndex: 1,
        }}>
            <h1 style={{ color: "#333", marginBottom: "2rem" }}>🎰 Lottery</h1>
            
            <div className="ticket" style={{ display: "flex", justifyContent: "center", gap: "1.2rem", marginBottom: "2.5rem" }}>
                {[0, 1, 2].map((i) => (
                    <span key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "60px",
                        height: "60px",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        backgroundColor: isWinning ? "#4caf50" : "#f8f9fa",
                        color: isWinning ? "white" : "#333",
                        borderRadius: "50%",
                        boxShadow: "inset 0 3px 5px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)"
                    }}>
                        {ticket[i]}
                    </span>
                ))}
            </div>
            
            <button 
                style={{ padding: "12px 24px", fontSize: "1.1rem", fontWeight: "bold", border: "none", borderRadius: "8px", backgroundColor: "#007bff", color: "white", cursor: "pointer", boxShadow: "0 4px 6px rgba(0,123,255,0.3)", marginBottom: "1.5rem" }}
                onClick={() => setticket(genTicket(3))}>
                🎟️ Get New Ticket
            </button>
            
            <div style={{ height: "30px" }}>
                <h3 style={{ color: isWinning ? "#2e7d32" : "#d32f2f", margin: 0 }}>
                    {isWinning ? "Congratulations, you won! 🎉" : "Sorry, try again! 😢"}
                </h3>
            </div>
        </div>
    )
}
export default Lottery;