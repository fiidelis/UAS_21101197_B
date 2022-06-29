function deletedata(){
    let kode_mk = document.getElementById("txkode_mk").value;
    
    let dta = "kode_mk="+kode_mk;
    const gh = new XMLHttpRequest();
    gh.open("POST","http://localhost/UAS_21101197_FidelisArlando_B/server/dtmkdelete.php");
    gh.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    gh.send(dta);

    gh.onload = function(){
        const dta = JSON.parse(this.responseText);
        if(dta["sukses"]){
            document.getElementById("pesan").style.display = "block";
        }
        setTimeout(()=>{
            window.location.href="http://localhost/UAS_21101197_FidelisArlando_B/client/index.php?p=mk";
        },5000);
    }

}