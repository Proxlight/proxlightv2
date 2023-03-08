document.addEventListener("mousemove", parallax);

function parallax(e){
	this.querySelectorAll(".Shape").forEach(layer=>{
		const speed = layer.getAttribute("data-speed")

		const x = (window.innerWidth = e.pageX * speed) / 75
		const y = (window.innerHeight = e.pageY * speed) / 75

		layer.style.transform = `scale(0.6) translateX(${x}px) translateY(${y}px)`
	})
}