function addGaleriaInsta(usuario)
{

	$.getJSON('https://www.instagram.com/'+usuario+'/?__a=1', (data) => {

	let media = data.graphql.user.edge_owner_to_timeline_media.edges;

	var i = 0;
	media.forEach((post) => {
	post = post.node;

	var hijas = post.edge_sidecar_to_children.edges;
	if(hijas.length > 0)
	{
	  for(var x = 0; x < hijas.length; x++)
	  {
		var hija = hijas[x].node;
		
		var imagenEnlaceAll = "https://www.instagram.com/p/"+hija.shortcode+"/";
		crearImagen(i, imagenEnlaceAll, hija.display_url)
		
		i++;
	  }	  
	}
	else
	{
		var imagenEnlaceAll = "https://www.instagram.com/p/"+post.shortcode+"/";
		crearImagen(i, imagenEnlaceAll, post.display_url)
	}

	i++;
		});
	});		
}

function crearImagen(id, urlEnlace, urlImagen)
{
	var padre = document.getElementById("galeriaInsta");
	
	var contenedor = document.createElement("div");
	contenedor.className = "col-sm-6 col-md-4";
	padre.appendChild(contenedor);
	
	var enlace = document.createElement("a");
	enlace.target = "_blank";
	enlace.id = "enlace" + id;
	enlace.className = "lightbox";
	enlace.href = urlEnlace;
	contenedor.appendChild(enlace);
	
	var imagen = document.createElement("img");
	imagen.id = "galeria" + id;
	imagen.src = urlImagen;
	enlace.appendChild(imagen);
	
}
