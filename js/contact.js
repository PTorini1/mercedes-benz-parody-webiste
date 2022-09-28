var GE = document.getElementById("General Button");
var SE = document.getElementById("Service Button");
var EWE = document.getElementById("Extended Warranty Button")
var FE = document.getElementById("Fleet Enquiries Button")
var FAR = document.getElementById("Find a Retailer Button")
var CS = document.getElementById("Customer Services Button")
var MC = document.getElementById("Motor Claim")
var RA = document.getElementById("Roadside Assist")
var MB = document.getElementById("MBI Claim")
var S1 = document.getElementById("Stage1 Button")
var S2 = document.getElementById("Stage2 Button")
var S3 = document.getElementById("Stage3 Button")
var S4 = document.getElementById("Stage4 Button")
var AveMaria = document.getElementById("AveMaria")
var BluePen = document.getElementById("BluePen")
var GaloCego = document.getElementById("GaloCego")


function generalEnquiries(){
    GE.style.color = '#448DBA'
    SE.style.color = 'white'
    EWE.style.color = 'white'
    FE.style.color = 'white'
    FAR.style.color = 'white'
    CS.style.color = 'white'
    AveMaria.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Consultas Gerais</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Mercedes Benz BR Ltd</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">De Segunda a Sexta das 8:00 as 17:00</p><p style="font-size: 25px; color: white;visibility: visible; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Tel: 0080097777777</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Tel: 02076609993</p><a class="btn btn-light py-2 px-3 bi bi-chevron-right wow fadeIn" style="color:white;background-color:rgb(92, 148, 233); border-color:rgb(92, 148, 233);visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" data-wow-delay="0.3s" href="forms.html">Formulário para Consulta</a><a class="btn btn-primary py-2 px-3 bi bi-chevron-right wow fadeIn" style="margin-left:14px;color:white;background-color:rgb(95, 95, 95); border-color:rgb(95, 95, 95); visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" href="forms.html" data-wow-delay="0.3s">Formulário para Contato</a>'
    AveMaria.style = "padding-left:153.3px;padding-top:200px"
}
function serviceEnquiries(){
    SE.style.color = '#448DBA'
    GE.style.color = 'white'
    EWE.style.color = 'white'
    FE.style.color = 'white'
    FAR.style.color = 'white'
    CS.style.color = 'white'
    AveMaria.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Consultas a Serviços</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">De Segunda a Sexta das 8:30 as 17:30</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Tel: 0370 242 6200</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Email: pc.servicecontract@daimler.com</p>'
    AveMaria.style = "padding-left:184px;padding-top:200px"
}
function extendedWarrantyEnquiries(){
    EWE.style.color = '#448DBA'
    SE.style.color = 'white'
    GE.style.color = 'white'
    FE.style.color = 'white'
    FAR.style.color = 'white'
    CS.style.color = 'white'
    AveMaria.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Consultas sobre Garantias Extendidas</p><p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">(Carros com mais de 3 anos)</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">De Segunda a Sexta das 8:00 as 18:00</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Sabado das 9:00 as 13:00</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Tel: 0345 641 9765</p>'
    AveMaria.style = "padding-left:200px;padding-top:200px"
}
function fleetEnquiries(){
    FE.style.color = '#448DBA'
    SE.style.color = 'white'
    GE.style.color = 'white'
    EWE.style.color = 'white'
    FAR.style.color = 'white'
    CS.style.color = 'white'
    AveMaria.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Consultas sobre Disponibilidade</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">De Segunda a Sexta das 8:30 as 17:00</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Tel: 0800 369 8998</p>'
    AveMaria.style = "padding-left:200px;padding-top:200px"
}
function findARetailer(){
    FAR.style.color = '#448DBA'
    FE.style.color = 'white'
    SE.style.color = 'white'
    GE.style.color = 'white'
    EWE.style.color = 'white'
    CS.style.color = 'white'
    AveMaria.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Encontre um Vendedor</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">De Segunda a Sexta das 8:00 as 18:00</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Para achar um revendedor próximo</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Ligue para o número</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Tel: 0352 2545 55458</p>'
    AveMaria.style = "padding-left:200px;padding-top:200px"
}
function customerServices(){
    CS.style.color = '#448DBA'
    SE.style.color = 'white'
    GE.style.color = 'white'
    EWE.style.color = 'white'
    FE.style.color = 'white'
    FAR.style.color = 'white'
    AveMaria.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Imprensa</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Visite o nosso site de imprensa</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">para ver as últimas noticias e novidades!</p><a class="btn btn-light py-2 px-3 bi bi-chevron-right wow fadeIn" style="color:white;background-color:rgb(92, 148, 233); border-color:rgb(92, 148, 233);visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" data-wow-delay="0.3s" href="">Veja</a>'
    AveMaria.style = "padding-left:174px;padding-top:200px"
}
function roadsideAssist(){
    RA.style.color = '#448DBA'
    MC.style.color = 'white'
    MB.style.color = 'white'
    BluePen.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Assistência na estrada</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">A assistência na estrada foi criada para lhe </p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">proporcionar total tranquilidade na estrada</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">, 24 horas por dia, 7 dias</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">na semana e 365 dias no ano.</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: 0080017777777</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: 02079757077</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: +44(0)2073441651</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: +44(0)2073441651</p>'
    BluePen.style = "padding-left:150px;padding-top:200px"
}
function motorClaim(){
    RA.style.color = 'white'
    MC.style.color = '#448DBA'
    MB.style.color = 'white'
    BluePen.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Reinvidicação de Seguro</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">As linhas estão abertas 24 horas por dia</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">, 7 dias na semana e 365 dias no ano.<p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: 0080017777777</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: 02079757077</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: +44(0)2073441651</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: +44(0)2073441651</p>'
    BluePen.style = "padding-left:180px;padding-top:220px"
}
function mbiClaim(){
    RA.style.color = 'white'
    MC.style.color = 'white'
    MB.style.color = '#448DBA'
    BluePen.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Reclamações Gerais</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">De Segunda a Sexta das 9:00 as 17:00</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">E de Sabado das 9:00 ate 12:00</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">Tel: 0127 9456 507</p>'
    BluePen.style = "padding-left:203px;padding-top:220px"
}
function stage1(){
    S1.style.color = '#448DBA'
    S2.style.color = 'white'
    S3.style.color = 'white'
    S4.style.color = 'white'
    GaloCego.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">1 - Entre em contato com seu revendedor</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Se você estiver insatisfeito</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">com seu veículo ou com o serviço</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">que recebeu entre em contato com </p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">seu revendedor local, eles são </p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">melhores para resolver seu problema</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">em primeira instância e entrarão em contato</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""">conosco diretamente em seu nome.</p>'
    GaloCego.style = "padding-left:160px;padding-top:200px"
}
function stage2(){
    S1.style.color = 'white'
    S2.style.color = '#448DBA'
    S3.style.color = 'white'
    S4.style.color = 'white'
    GaloCego.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">2 - Fale Conosco</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s">Email: cs.uk@cac.mercedes-benz.com</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Tel: 0800 9777 7777</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Tel: 0207 660 9993</p>'
    GaloCego.style = "padding-left:223px;padding-top:200px"
}
function stage3(){
    S1.style.color = 'white'
    S2.style.color = 'white'
    S3.style.color = '#448DBA'
    S4.style.color = 'white'
    GaloCego.innerHTML = '<p style="font-size:35px; font-family:Rockwell Condensed;color:white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">3 - Nossa Resposta</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Uma vez recebida, sua reclamação</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s""> será atribuída a um consultor que assumirá</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">a liderança em sua reclamação e fornecerá um</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">número de referência.Existem casos que<p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">precisamos falar com seu revendedor.</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">Nosso objetivo é resolver todas as</p><p style="font-size: 25px; color: white;visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" class="wow fadeIn" data-wow-delay="0.3s"">reclamações dentro de cinco dias úteis</p>'
    GaloCego.style = "padding-left:131px;padding-top:200px"
}

function enviaForm(){
    alert('Seus dados foram enviados com sucesso! Aguarde um retorno da nossa central');
}



