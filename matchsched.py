from random import random
import json
from itertools import combinations

def generate_schedule(teams):
    schedule = []
    team_combinations = list(combinations(teams, 2))

    for round_num in range(1, 3):
        round_schedule = []
        for match in team_combinations:
            round_schedule.append({'Round': round_num, 'Match': match})
        team_combinations = [team_combinations[-1]] + team_combinations[:-1]

        schedule.extend(round_schedule)

    return schedule



with open('team_registration_data.json', 'r') as file:
    data = json.load(file)
names = [entry['teamName'] for entry in data]
schedule = generate_schedule(names)
datalist=[]
i=1
for match in schedule:
    print(f"Round {match['Round']}: {match['Match'][0]} vs {match['Match'][1]}")
    datalist.append({'Teama':match['Match'][0], 'Teamb':match['Match'][1], 'day':i})
    i=i+2
    
file_path = "src/Components/schedule.json"
print(datalist)
json_string_list = json.dumps(datalist, indent=2)

with open(file_path, "w") as file:
        file.write(json_string_list)
