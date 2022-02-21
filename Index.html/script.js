function nolasa(m1, m2, m3) {
    const malas = document.getElementsByClassName("mala");
    m1 = parseFloat(mala1.value);
    m2 = parseFloat(mala2.value);
    m3 = parseFloat(mala3.value);

    if (m1 > 0 && m2 > 0 && m3 > 0) {
        console.log({ m1, m2, m3 });
        return { m1, m2, m3 };
    } else {
        console.log(false);
        return false
    }

}
function perimetrs(m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1;
    m2 = m.m2;
    m3 = m.m3;

    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;
    console.log(p);
    return (p);

}
function pusper(m1, m2, m3) {
    const pusper = perimetrs(m1, m2, m3) / 2;
    console.log(pusper);
    return (pusper);

}
function laukums(m1, m2, m3) {
    const pusper = perimetrs(m1, m2, m3) / 2;
    let tlaukums = Math.sqrt(
        pusper * ((pusper - m1) * (pusper - m2) * (pusper - m3)));
    console.log(tlaukums);
    return laukums
}