
 async function getSpell() {
    const response = await fetch('https://hp-api.onrender.com/api/spells/');
    const spells = await response.json();
    const randomIndex = Math.floor(Math.random() * spells.length);
    return spells[randomIndex];
}


async function displaySpell() {
    const spellInfo = document.getElementById('spell-info');
    try {
        const spell = await getSpell();
        console.log(spell)
        spellInfo.innerHTML = `
            <h2>Spell name: ${spell.name}</h2>
            <p>Description: ${spell.description}</p>
        `;

    } catch (error) {
        console.error('Ocorreu um erro ao obter os dados do feitiço:', error);
        spellInfo.innerHTML = '<p>Ocorreu um erro ao carregar o feitiço. Tente novamente mais tarde.</p>';
    }
}


window.onload = displaySpell;