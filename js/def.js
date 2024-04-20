import { category, item, waAPI } from "./main.js";

waAPI.countryCode = "process.env.countryCode";
waAPI.number = false;
item.currency = "pt-br";

category.add("Lanches", "lanches");
item.add("Goiabinha", "Deliciosas goiabinhas criteriosamente selecionadas.", 10.00, "goiabinha.jpg", "lanches");
item.add("Quiche", "Um gosto de comida caseira que seus clientes sempre procuram.", 18.00, "quiche.jpg", "lanches");
item.add("Empadão", "Feito de frangos selecionados especialmente para proporcionar sabor marcante.", 20.00, "empadão.jpg", "lanches");

category.add("Lanches", "lanches2");
item.add("Empadinha", "Com queijo de bufalas do egito.", 10.00, "empadinha.jpg", "lanches2");
item.add("Pasteizinhos", "Feito de carne de sol com nata, esse delicioso salgado te deixará com gostinho de quero mais.", 18.00, "mini pasteis.jpg", "lanches2");
item.add("Especial da Casa", "Um sanduíche parrudo para matar a sua fome, mas sem perder o sabor da carne nobre.", 20.00, "xSalada.jpeg", "lanches2");