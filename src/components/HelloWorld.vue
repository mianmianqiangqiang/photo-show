<template>
	<div id="helloworld" class="top">
		<!-- Content -->
		<div class="cd-hero">
			<ul class="cd-hero-slider">

				<!-- Page 1 Gallery One -->
				<li class="selected">
				
						
							<div class="tm-img-gallery-container">
								<div class="tm-img-gallery gallery-one">
									<!-- Gallery One pop up connected with JS code below -->
									<div class="grid-item">
										<figure class="effect-sadie">
											<img src="../assets/img/tm-img-01-tn.jpg" alt="Image" class="img-fluid tm-img">
											<figcaption>
												<h2 class="tm-figure-title">Image <span><strong>One</strong></span></h2>
												<p class="tm-figure-description">Set true or false in HTML script tag for this page black and white.</p>
												<a href="../assets/img/tm-img-01.jpg">View more</a>
											</figcaption>
										</figure>
									</div>
									<div class="grid-item">
										<figure class="effect-sadie">
											<img src="../assets/img/tm-img-02-tn.jpg" alt="Image" class="img-fluid tm-img">
											<figcaption>
												<h2 class="tm-figure-title">Image <span><strong>Two</strong></span></h2>
												<p class="tm-figure-description">Set true or false in HTML page line number 40 to turn on off page color.</p>
												<a href="../assets/img/tm-img-02.jpg">View more</a>
											</figcaption>
										</figure>
									</div>
									<div class="grid-item">
										<figure class="effect-sadie">
											<img src="../assets/img/tm-img-03-tn.jpg" alt="Image" class="img-fluid tm-img">
											<figcaption>
												<h2 class="tm-figure-title">Image <span><strong>Three</strong></span></h2>
												<p class="tm-figure-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
												<a href="../assets/img/tm-img-03.jpg">View more</a>
											</figcaption>
										</figure>
									</div>

								</div>
							</div>
					
					
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
		export default {
			name: 'HelloWorld',
			data() {
				return {}
			},
			methods: {
				height:function adjustHeightOfPage(pageNo) {
					var pageContentHeight = 0;
				    var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");
					
				}
				
	
			}
		}

//		$(document).ready(function() {
//			function adjustHeightOfPage(pageNo) {
//				var pageContentHeight = 0;
//				var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");
//				alert(pageType)
//				if(pageType != undefined && pageType == "gallery") {
//					pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .tm-img-gallery").height();
//				} else {
//					pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height() + 20;
//				}
//	
//				// Get the page height
//				var totalPageHeight = pageContentHeight;
//				
//				// Adjust layout based on page height and window height
//				if(totalPageHeight > $(window).height()) {
//					$('.cd-hero-slider').addClass('small-screen');
//					$('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
//				} else {
//					$('.cd-hero-slider').removeClass('small-screen');
//					$('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
//				}
//			};
//			adjustHeightOfPage(1);
//		});

</script>

<style scoped>

</style>