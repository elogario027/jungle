import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-animalinfo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animalinfo.component.html',
  styleUrl: './animalinfo.component.css'
})
export class AnimalinfoComponent implements OnInit{
  animalName: string = "";
  animalInfo: string = "";
  animalImage: string = "";

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['animalName'] == 'hawksbillturtle'){
        this.animalName = 'Hawksbill Turtle';
        this.animalImage = 'hawksbillturtle.png';
        this.animalInfo = 'The hawksbill turtle (Eretmochelys imbricata) lives in coral reefs, rocky areas, and shallow coastal areas. Tropical and subtropical seas, including the Philippines, are home to this species. This species is severely endangered because its shell is very colorful and it has a hooked beak. The primary threats to this species include illegal shell hunting, habitat loss, pollution, entanglement in fishing gear, and climate change. Hawksbill turtles are small to medium-sized turtles that have trouble nesting because of human activity and coastal development, which puts their numbers at even greater risk. They need tight protection laws, habitat preservation programs, and community-based projects, along with international agreements and public awareness campaigns that aim to stop illegal trade and encourage responsible conservation practices, in order to stay alive.';
      } else if (params['animalName'] == 'spotteddeer'){
        this.animalName = 'Philippine Spotted Deer';
        this.animalImage = 'spotteddeer.png';
        this.animalInfo = 'The Philippine spotted deer (Rusa alfredi) lives in the woods of the Philippines, mostly on the islands of Panay, Negros, and Cebu. It is a species that is in serious danger of going extinct. The Philippine spotted deer is known for its unique spotted coat and small size compared to other deer species. Cutting down trees, expanding farms, and people moving into their habitat are the main threats to its survival. Additionally, illegal hunting and poaching have made a big difference in the population decrease. To protect the Philippine spotted deer and make sure it stays in its native habitat, conservation efforts such as habitat protection, reforestation programs, setting up protected areas, and community-based conservation projects are very important.';
      } else if (params['animalName'] == 'suluhornbill') {
        this.animalName = 'Sulu Hornbill';
        this.animalImage = 'suluhornbill.png';
        this.animalInfo = 'Only the islands of Tawi-Tawi and Sulu in the southern Philippines are home to Anthracoceros montani, the Sulu hornbill. It lives in primary and secondary woods, mangrove forests, and coastal areas. Cutting down trees, illegal shooting, and expanding farms are destroying or damaging its habitat, putting this beautiful bird in serious danger of going extinct. Its glossy black feathers, noticeable casque, and white tail make it easy to spot. Due to its small population size and limited range, the Sulu hornbill is in danger of going extinct if we don\'t take quick action to protect its habitat and stop poaching. We can do this by starting reforestation projects, community-based conservation projects, and habitat protection programs. To save this unique and endangered bird species, we need to raise awareness among the public and use sustainable resource management methods. This will help protect biodiversity in the Philippines.';
      } else if (params['animalName'] == 'tamaraw'){
        this.animalName = 'Tamaraw';
        this.animalImage = 'tamaraw.png';
        this.animalInfo = 'Mindoro Island in the Philippines is home to the tamaraw (Bubalus mindorensis), which lives in fields, bamboo thickets, and forested areas in mountainous areas, mostly in protected areas like Mount Iglit-Baco National Park and Mount Calavite Wildlife Sanctuary. This type of small buffalo has a dark brown to black coat and is stocky. Farming, logging, and human migration are destroying its habitat, leading to poaching, disease, and competition with domestic animals for food. There aren\'t many tamaraws left in the wild, and they are in small numbers. If we don\'t protect their habitat and start captive breeding programs, take steps to stop poaching, start community-based conservation efforts, and run public awareness campaigns, the tamaraw and other species in the Philippines could become extinct.';
      }else if (params['animalName'] == 'visayanwartypig'){
        this.animalName = 'Visayan Warty Pig';
        this.animalImage = 'wartypig.png';
        this.animalInfo = 'The Visayan warty pig (Sus cebifrons) is a species that only lives in the Visayan Islands in the Philippines. Its home islands are Panay, Negros, Cebu, and a few smaller islands close by. These pigs live in a variety of places, such as woods, grasslands, and farms. Visayan warty pigs are very endangered because their environment is being destroyed or lost due to things like deforestation, farming, and people moving into the area. These animals are known for having warty faces and a rough coat. Hunting and theft are also things that hurt their numbers. For this famous species and the biodiversity of the Visayan Islands to be saved, conservation efforts are needed. These include restoring habitats, setting up protected areas, community-based conservation programs, and breeding programs in captivity.';
      }
    });
  }
}
