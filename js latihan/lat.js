var tanya = true;
while(tanya){
    var p = 3;
        while(p >= 0){
            var ran = Math.floor(Math.random() * 11);
            var tebak = prompt('tebak angka berapa');
            var hasil = '';
            if(tebak == ran){
                hasil = 'tebakan anda benar';
                alert(hasil);
                tanya = confirm('lagi?');
                break;
            }else if(tebak < ran){
                hasil = 'terlalu rendah';
                alert(hasil);
            }else if(tebak > ran){
                hasil = 'terlalu tinggi';
                alert(hasil);
            }
            if(p == 0){
                hasil = 'kesempatan anda habis';
                alert(hasil);
                tanya = confirm('lagi?');
                break;
            }
            p--;
            // console.log(tanya);
            // console.log(p);
    }
}
