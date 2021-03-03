/**
Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas// ULTIMO
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */
function probarEjercicio()
{
	
	var tipoMascota;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var raza;
	var peso;
	var estadoClinico;
	var temperaturaCorporal;
	var continuar;
	var i =0;

	var perroMasPesado;
	var animalSinPelo;

	var porcentajeEnfermos;
	var contadorEnfermos = 0;
	var contadorInternado =0;
	var contadorAdopcion =

	var UltimoNombreOtraCosa
	var MenorTemperaturaSinPelo;
	
	
	var contadorPerro =0;
	var contadorGato =0;
	var contadorOtraCosa =0;

	var flagSinPelo;

	var temperaturaCorporalPerro;
	var temperaturaCorporalGato;
	var temperaturaCorporalOtraCosa;
	var temperaturaMaxima;
	var nombreMaximaTemperatura;
	var acumuladorTemperaturaPerro =0;
	var acumuladorTemperaturaOtraCosa =0;
	var acumuladorTemperaturaGato =0;
	var flagGato = true;
	var flagOtraCosa = true;
	var mayorPorcentajeTemperatura;

	//f)Sumando gatos y perros que porcentaje del total de mascotas son?
	var porcentajeGatosYPerros;

	var acumuladorPesoTotalMascotas = 0;
	var promedioPesoTotalMascotas;

	var pesoGatoSinPelo;
	var flagGatoSinPelo;
	var nombreGatoSinPelo;
	var razaGatoSinPelo;

	var contadorEnfermos = 0;
	var contadorInternado = 0;
	var contadorAdopcion = 0;
	var menorCantidadEstadoClinico;

	do
	{
	do
	{
		tipoMascota = prompt ("Ingrese mascota. (gato, perro u otra cosa)");

		if(tipoMascota == "gato")
		{
			contadorGato++;
		}

		else 
		{
			if(tipoMascota == "perro")
			{
				contadorPerro++;
			}
			else
			{
				if(tipoMascota == "otra cosa")
				{
					contadorOtraCosa++;
				}
			}
		}

	}while (tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "otra cosa" || isNaN(tipoMascota) == false);
	
	do
	{
		tipoPelaje = prompt ("Ingrese pelaje. (corto, largo , sin pelo):");

	}while (tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo" || isNaN(tipoPelaje) == false);
	
	do
	{
		edadMascota = prompt ("Ingrese edad de la mascota:");
		edadMascota = parseInt (edadMascota);

	}while (edadMascota > 50 || edadMascota < 0 || isNaN (edadMascota))
	
	do
	{
		nombreMascota = prompt ("Ingrese nombre:");
	}while (isNaN(nombreMascota) == false);
	
	do
	{
		raza = prompt ("Ingrese raza");
	}while (isNaN(raza) == false);

	do
	{
		peso = prompt ("Cuanto pesa su mascota?");
		peso = parseInt (peso);

	}while (peso > 50 || peso < 1 || isNaN(peso));
	
	do
	{
		estadoClinico = prompt ("Cual es el estado clinico de su mascota? (enfermo,internado o adopcion)");

		if(estadoClinico == "enfermo")
		{
			contadorEnfermos++;
		}
		else
		{
			if (estadoClinico == "internado")
			{
				contadorInternado++;
			}
			else
			{
				contadorAdopcion++;
			}
		}
	}while (estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico !="adopcion" || isNaN (estadoClinico) == false);
	

	do
	{
		temperaturaCorporal = prompt ("Ingrese la temperatura de su mascota:");
		temperaturaCorporal = parseInt (temperaturaCorporal);
	}while (temperaturaCorporal < 30 || temperaturaCorporal > 80 || isNaN (temperaturaCorporal))
	

	
	switch(tipoMascota)
	{
		case "perro":

			if(contadorPerro == 1 || peso>perroMasPesado) 
			{
				perroMasPesado = peso;
				
			}
			else
			{
				if(contadorPerro == 1 || temperaturaMaxima<temperaturaCorporal)
				{
					temperaturaMaxima = temperaturaCorporal; 
					nombreMaximaTemperatura = tipoMascota;
					acumuladorTemperaturaPerro = acumuladorTemperaturaPerro +temperaturaCorporalPerro;
				}
			}

		break;

		case "gato":

		if(temperaturaMaxima< temperaturaCorporal || flagGato == true)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreMaximaTemperatura = tipoMascota;
			acumuladorTemperaturaGato = acumuladorTemperaturaGato +temperaturaCorporalGato;

			flagGato = false;
		}


		
		break;

		case "otra cosa":

			UltimoNombreOtraCosa = nombreMascota;

		if(temperaturaMaxima< temperaturaCorporal || flagOtraCosa == true)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreMaximaTemperatura = tipoMascota;
			acumuladorTemperaturaOtraCosa = acumuladorTemperaturaOtraCosa +temperaturaCorporalOtraCosa;

			flagOtraCosa = false;
		}
		break;

	}	 



	
	if(tipoPelaje == "sin pelo")
	{
		if(flagSinPelo == true || MenorTemperaturaSinPelo > temperaturaCorporal )
		{
			MenorTemperaturaSinPelo = temperaturaCorporal;
			animalSinPelo = tipoMascota;
		}
		else
		{

		}
		if(tipoMascota == "gato" && pesoGatoSinPelo > peso || flagGatoSinPelo)
		{
			nombreGatoSinPelo = nombreMascota;
			razaGatoSinPelo = raza;
		}

	}
	
	acumuladorPesoTotalMascotas = acumuladorPesoTotalMascotas + peso;




	i++;
	continuar = confirm ("Desea ingresar mas mascotas?");


}while(continuar == true)
	
	promedioPesoTotalMascotas = acumuladorPesoTotalMascotas / i;

	porcentajeEnfermos = contadorEnfermos / i;

	



	porcentajeGatosYPerros = (100* (contadorGato+contadorPerro)) / (contadorPerro + contadorGato + contadorOtraCosa);

if (contadorEnfermos < contadorInternado && contadorEnfermos < contadorAdopcion)
{
	menorCantidadEstadoClinico = "enfermo";
}
else
{
	if(contadorInternado < contadorEnfermos && contadorInternado < contadorAdopcion)
	{
		menorCantidadEstadoClinico = "internado";
	}
	else
	{
		menorCantidadEstadoClinico = "adopcion";
	}
}


if(contadorPerro>0)
{
	document.write ("El perro mas pesado pesa "+ perroMasPesado+ 
		". El porcentaje de gatos y perros sobre el total de mascotas es "+ porcentajeGatosYPerros);
}
else
{
	document.write ("No hay perros pesados");
}


document.write (". El porcentaje de enfermos sobre el total de mascotas es "+
	porcentajeEnfermos);

if(contadorOtraCosa > 0)
{
	document.write (". El nombre de la ultima mascota tipo otra cosa es " + UltimoNombreOtraCosa);
}
else
{
	document.write (". No hay mascotas de tipo otra cosa");
}

if(MenorTemperaturaSinPelo > 0)
{
	document.write (". El animal sin pelo con menor temperatura corporal es " + animalSinPelo);
}
else
{
	document.write(". No hay animales sin pelo");
}

	document.write (". El tipo de mascota con mayor promedio de temperatura corporal es " + nombreMaximaTemperatura+
		". El estado clinico que tiene la minoria de mascotas es " + menorCantidadEstadoClinico+
		". El promedio de peso del total de las mascotas es " + promedioPesoTotalMascotas + " kg. ");

	if(flagGatoSinPelo == false)
	{
		document.write ("El nombre y la raza del gato sin pelo mas liviano es " + nombreGatoSinPelo);
	}
	else
	{
		document.write ("No hay gatos sin pelo."); 
	}
	
}