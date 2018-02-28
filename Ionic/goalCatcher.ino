
/* Constantes pour les broches */
const byte TRIGGER_PIN = 2; // Broche TRIGGER
const byte ECHO_PIN = 3;    // Broche ECHO
const byte TRIGGER2_PIN = 6; // Broche TRIGGER
const byte ECHO2_PIN = 7;    // Broche ECHO

const float distanceDif = 15;
float moy1,moy2;
 
/* Constantes pour le timeout */
const unsigned long MEASURE_TIMEOUT = 25000UL; // 25ms = ~8m à 340m/s

/* Vitesse du son dans l'air en mm/us */
const float SOUND_SPEED = 340.0 / 1000;

/** Fonction setup() */
void setup() {
   
  /* Initialise le port série */
  Serial.begin(115200);
  /* Initialise les broches */
  pinMode(TRIGGER_PIN, OUTPUT);
  digitalWrite(TRIGGER_PIN, LOW); // La broche TRIGGER doit être à LOW au repos
  pinMode(ECHO_PIN, INPUT);
  moy1 = calcDista1();
  Serial.println("----------MOYENNE RECUPEREE SETUP--------");
  Serial.println(moy1);

  /* Initialise les broches */
  pinMode(TRIGGER2_PIN, OUTPUT);
  digitalWrite(TRIGGER2_PIN, LOW); // La broche TRIGGER doit être à LOW au repos
  pinMode(ECHO2_PIN, INPUT);
  moy2 = calcDista2();
  Serial.println("----------MOYENNE2 RECUPEREE SETUP--------");
  Serial.println(moy2);
}
 
/** Fonction loop() */
void loop() {
  
  /* 1. Lance une mesure de distance en envoyant une impulsion HIGH de 10µs sur la broche TRIGGER */
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER_PIN, LOW);
  
  /* 2. Mesure le temps entre l'envoi de l'impulsion ultrasonique et son écho (si il existe) */
  long measure = pulseIn(ECHO_PIN, HIGH, MEASURE_TIMEOUT);
   
  /* 3. Calcul la distance à partir du temps mesuré */ 
  float distance_mm = measure / 2.0 * SOUND_SPEED;
  if(distance_mm >=(moy1 + distanceDif) || distance_mm < (moy1-distanceDif))
  {
      /* Affiche les résultats en mm, cm et m */
  /*Serial.print(F("Distance: "));
  Serial.print(distance_mm);
  Serial.print(F("mm)"));
  Serial.print("\n");*/
  Serial.println("b");
  }

  /* 1. Lance une mesure de distance en envoyant une impulsion HIGH de 10µs sur la broche TRIGGER */
  digitalWrite(TRIGGER2_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER2_PIN, LOW);
  
  /* 2. Mesure le temps entre l'envoi de l'impulsion ultrasonique et son écho (si il existe) */
  long measure2 = pulseIn(ECHO2_PIN, HIGH, MEASURE_TIMEOUT);
   
  /* 3. Calcul la distance à partir du temps mesuré */ 
  float distance_mm2 = measure2 / 2.0 * SOUND_SPEED;
  if(distance_mm2 >=(moy2 + distanceDif) || distance_mm2 < (moy2-distanceDif))
  {
      /* Affiche les résultats en mm, cm et m */
  /*Serial.print(F("Distance: "));
  Serial.print(distance_mm2);
  Serial.print(F("mm)"));
  Serial.print("\n");*/
  Serial.println("r");
  }



  //RENVOYER UNE VALEUR POUR BUT
 /* if(distance_mm <100 && distance_mm >20)
  {
    flag1 = 1;  // valeure à lire par raspbi
    Serial.print(flag1);
    Serial.print("\n");
    delay(5); 
    flag1=0;
  }*/
  
  
  
  /*Serial.print(distance_mm / 10.0, 2);
  Serial.print(F("cm, "));
  Serial.print(distance_mm / 1000.0, 2);
  Serial.println(F("m)"));*/
  /*
  flag1 = true;    // BUT
  Serial.println("1");
  delay(5); 
  flag1 = false;*/
  //}
  // delais d'attente
  delay(5);
}

float calcDista1()
{ 
  float val[11];
  float distance_mm;
  float moy=0;
  for(int i =0; i<10; i++)
  {
    digitalWrite(TRIGGER_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIGGER_PIN, LOW);
    long measure = pulseIn(ECHO_PIN, HIGH, MEASURE_TIMEOUT);
    distance_mm = measure / 2.0 * SOUND_SPEED;
    val[i]=distance_mm;
    moy +=val[i];
  }
    moy = moy/10;
    Serial.println("----------MOYENNE CALCULEE FONCTION1--------");
    Serial.println(moy);
  return moy;
  
}

float calcDista2()
{ 
  float val[11];
  float distance_mm;
  float moy=0;
  for(int i =0; i<10; i++)
  {
    digitalWrite(TRIGGER2_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIGGER2_PIN, LOW);
    long measure = pulseIn(ECHO2_PIN, HIGH, MEASURE_TIMEOUT);
    distance_mm = measure / 2.0 * SOUND_SPEED;
    val[i]=distance_mm;
    moy +=val[i];
  }
    moy = moy/10;
    Serial.println("----------MOYENNE CALCULEE FONCTION1--------");
    Serial.println(moy);
  return moy;
  
}
