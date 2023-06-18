function kirimData() {
    var Name = document.getElementById("nama").value;
    var Date = document.getElementById("tanggal").value;
    var Day = document.getElementById("Day").value;
    var Palce = document.querySelector('input[name="Plan"]:checked').value;
    var NumberofTicket = document.getElementById("Jumlah").value;
    var Contact = document.getElementById("Contact").value;
  
    alert("Data yang dikirim:\n\n" +
      "Nama: " + Name + "\n" +
      "Tanggal: " + Date + "\n" +
      "Day: " + Day + "\n" +
      "Tempat: " + Place + "\n" +
      "Jumlah Tiket: " + NumberofTicket + "\n" +
      "Contact: " + Contact);
  }
  