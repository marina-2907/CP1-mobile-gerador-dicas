import { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function Index() {
  const tips: string[] = [
    "Beba mais água durante o dia.",
    "Organize suas tarefas antes de começar a rotina.",
    "Faça pequenas pausas enquanto estuda.",
    "Durma mais cedo para descansar melhor.",
    "Evite usar o celular durante as refeições.",
    "Anote suas metas da semana.",
    "Comece pela tarefa mais importante primeiro.",
    "Mantenha seu espaço de estudo limpo e confortável."
  ];

  function getRandomTip(): string {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  }

  const [currentTip, setCurrentTip] = useState<string>(getRandomTip());

  function updateTip() {
    let newTip = getRandomTip();

    while (newTip === currentTip && tips.length > 1) {
      newTip = getRandomTip();
    }

    setCurrentTip(newTip);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEF4FF" />
      <Text style={styles.title}>Gerador de Dicas</Text>

      <View style={styles.iconCircle}>
        <Text style={styles.icon}>💡</Text>
      </View>

      <View style={styles.tipBox}>
        <Text style={styles.tipText}>{currentTip}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={updateTip}>
        <Text style={styles.buttonText}>Atualizar dica</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF4FF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1F2A44',
    marginTop: 20,
  },
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#F4EFD9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  icon: {
    fontSize: 40,
  },
  tipBox: {
    width: '100%',
    minHeight: 220,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  tipText: {
    fontSize: 24,
    color: '#36495F',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 34,
  },
  button: {
    width: '100%',
    backgroundColor: '#3E7BEA',
    paddingVertical: 18,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});