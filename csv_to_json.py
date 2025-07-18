import csv
import json
import sys

def csv_to_json(csv_file_path, json_file_path):
    data = []

    # Read CSV file
    with open(csv_file_path, mode='r', newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)

    # Write JSON file
    with open(json_file_path, mode='w', encoding='utf-8') as jsonfile:
        json.dump(data, jsonfile, indent=4)

    print(f"✅ Successfully converted '{csv_file_path}' to '{json_file_path}'.")

if __name__ == '__main__':
    # if len(sys.argv) != 3:
    #     print("Usage: python csv_to_json.py input.csv output.json")
    # else:
    csv_to_json('./public/data/club_conveners.csv', './public/data/club_conveners.json')
